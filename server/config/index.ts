import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 4000,
    MONGO_HOST: process.env.MONGO_HOST || 'mongodb://localhost',
    MONGO_DB: process.env.MONGO_DB || 'test'
};