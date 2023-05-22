import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "8112",
    role: "student",
    password: "habiburnobel7761",
    name: {
      firstName: "Habibur",
      middleName: "Rahaman",
      lastName: "Nobel",
    },
    dateOfBirth: "21st June, 1997",
    gender: "male",
    email: "habiburnobel@gmail.com",
    contactNo: "01521320912",
    emergencyContactNo: "01611627761",
    presentAddress: "South Banasree",
    permanentAddress: "Cumilla",
  });

  await user.save();
  console.log("user", user);
  return user;
};
