import { IUser } from "./user.interface";
import User from "./user.model";

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIDFromDB = async (
  payload: string
): Promise<IUser | null> => {
  // const user = await User.findOne({ id: payload });
  //! if i want anything specific then we have to use Field Filtering
  const user = await User.findOne({ id: payload }, { name: 1 }); //1 means true
  return user;
};

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  console.log(user.fullName());
  return user;
};

export const getAllAdminUsersFromDB = async (): Promise<IUser> => {
  const admins = await User.getAdminUsers();
  return admins;
};
