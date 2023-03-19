import mongoose from 'mongoose';

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// eslint-disable-next-line consistent-return
export const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.zdk3hsp.mongodb.net/?retryWrites=true&w=majority`,
    );
    console.log('Conectou ao banco!!!!!!!!');

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();
