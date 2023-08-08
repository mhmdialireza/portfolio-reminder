import IBase from './base.type'

export default interface IUser extends IBase {
  username: string
  email: string
  profile_image_path?: string
}
