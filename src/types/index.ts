export interface IAuth {
  clientId: string;
  changeUserProfile: Function;
  changeLoading: Function;
  disabled?: boolean;
}

export interface IUserProfile {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
  loading?: boolean;
}