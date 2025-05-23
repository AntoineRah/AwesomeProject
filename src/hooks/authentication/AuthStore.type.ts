interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  hydrated: boolean;
  setTokens: (
    accessToken: string,
    refreshToken: string,
    expiresIn: string,
  ) => void;
  clearTokens: () => void;
  setHydratedStorage: (isHydrated: boolean) => void;
}

export type {AuthState};
