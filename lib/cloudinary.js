import cloudinary from "cloudinary";
import dotenv from "dotenv";
//import fs from "fs";

dotenv.config();

cloudinary.v2.config({
    cloud_name: import.meta.env.CLOUD_NAME,
    api_key: import.meta.env.API_KEY,
    api_secret: import.meta.env.API_SECRET,
});


export async function UploadImage(image) {

    console.log("This is the image", image)

    const res = await cloudinary.v2.uploader.upload(image, {
        folder: "posts",
    });

    console.log(res)

    return res.link;
}