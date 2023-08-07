import IUser from './../user.type'

// payload interface
export interface IRegisterPayload {
  username: string
  email: string
  password: string
  password_confirmation: string
}

export interface ILoginPayload {
  email: string
  password: string
}

export interface IUserInfoPayload {
  user: IUser
}

export interface IUpdateProfilePayload {
  username: string
  email: string
  profile_image?: any
}


// response interface
export interface ILoginResponse {
  user: IUser
  token: string
}

export interface ILogoutResponse {
  success: string
}

export interface IRegisterResponse {
  user: IUser
  token: string
}

export interface IUserInfoResponse {
  user: IUser
}
