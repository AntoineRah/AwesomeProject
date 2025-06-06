import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImageLibraryOptions,
  CameraOptions,
} from 'react-native-image-picker';

import {getstyles} from './SettingsForm.style';
import {useAuthStore} from '../../../hooks/authentication/AuthStore';
import {useTheme} from '../../../hooks/theme';
import {fonts} from '../../../globalSyles/fontTheme';
import { crash, getCrashlytics } from '@react-native-firebase/crashlytics';

const SettingsForm = () => {
  const {clearTokens} = useAuthStore();
  const {toggle} = useTheme();
  const {colors} = useTheme();
  const styles = getstyles(colors);

  const [name, setName] = useState('Eurisko');
  const [photoUri, setPhotoUri] = useState('https://via.placeholder.com/150');

  const libraryOptions: ImageLibraryOptions = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.7,
  };

  const cameraOptions: CameraOptions = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.7,
  };

  const pickImageFromLibrary = () => {
    launchImageLibrary(libraryOptions, response => {
      if (response.didCancel) {
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage || 'Unknown error');
      } else if (response.assets && response.assets.length > 0) {
        setPhotoUri(response.assets[0].uri);
      }
    });
  };

  const takePhotoWithCamera = () => {
    launchCamera(cameraOptions, response => {
      if (response.didCancel) {
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage || 'Unknown error');
      } else if (response.assets && response.assets.length > 0) {
        setPhotoUri(response.assets?.[0]?.uri);
      }
    });
  };

  const onChangePhotoPress = () => {
    Alert.alert(
      'Change Profile Photo',
      'Select an option',
      [
        {text: 'Take Photo', onPress: takePhotoWithCamera},
        {text: 'Choose from Library', onPress: pickImageFromLibrary},
        {text: 'Cancel', style: 'cancel'},
      ],
      {cancelable: true},
    );
  };

  const onSavePress = () => {
    Alert.alert('Profile Updated', `Name: ${name}\nPhoto URI: ${photoUri}`);
  };

 const crashlytics = getCrashlytics();
 
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={onChangePhotoPress}>
          <Image source={{uri: photoUri}} style={styles.avatar} />
          <Text style={[styles.changePhotoText, fonts.regular]}>
            Change Photo
          </Text>
        </TouchableOpacity>

        <TextInput
          style={[styles.usernameInput, fonts.heading]}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />

        <Pressable onPress={toggle}>
          <Text style={[styles.toggleThemeText, fonts.regular]}>
            Toggle Theme
          </Text>
        </Pressable>
        <Pressable onPress={()=>crash(crashlytics)}>
          <Text style={[styles.toggleThemeText, fonts.regular]}>
            crash
          </Text>
        </Pressable>
      </View>

      <TouchableOpacity  onPress={onSavePress}>
        <Text style={[ fonts.regular]}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={clearTokens}>
        <Text style={[styles.logoutText, fonts.regular]}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export {SettingsForm};
