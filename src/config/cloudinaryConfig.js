import { config, uploader } from 'cloudinary';
import { config } from 'dotenv';

const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
} = process.env;

const cloudinaryConfig = () =>
  config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
  });

export { cloudinaryConfig, uploader };
