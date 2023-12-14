import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

if (!accessKeyId || !secretAccessKey || !region) {
    throw new Error("AWS credentials or region are not set in the environment variables.");
}

const s3Client = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
});

async function uploadFileToS3(file: Buffer, fileName: string, userName: string) {
    const fileBuffer = file;
    console.log("Received file:", fileName);

    const params = {
        Bucket: "salon-website-images",
        Key: `${userName}-results/${fileName}`,
        Body: fileBuffer,
        ContentType: "image/jpeg",
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return fileName;
}

export async function POST(req: any) {
    try {
        const formData = await req.formData();
        const file = formData.get("file");
        const userName = formData.get("userName");

        if (!file) {
            throw new Error("file is missing in the request body.");
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = await uploadFileToS3(buffer, file.name, userName);

        return NextResponse.json({ success: true, fileName });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error uploading." });
    }
}
