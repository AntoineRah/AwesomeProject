import React from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import {getstyles} from './SettingsForm.style';
import {useAuth} from '../../../hooks/authentication';
import {useTheme} from '../../../hooks/theme';

const SettingsForm = () => {
  const {logout} = useAuth();
  const {toggle} = useTheme();
  const {colors} = useTheme();
  const styles = getstyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.avatar}
        />
        <Text style={styles.username}>Eurisko</Text>
        <Pressable onPress={toggle}>
          <Text style={styles.toggleThemeText}>Toggle Theme</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export {SettingsForm};
