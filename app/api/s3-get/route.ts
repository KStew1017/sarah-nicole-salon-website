import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const bucketName = "salon-website-images";

        const listCommand = new ListObjectsV2Command({
            Bucket: bucketName,
        });

        const data = await s3Client.send(listCommand);

        const fileObjects = data.Contents || [];

        const urls = await Promise.all(
            fileObjects.map(async (file) => {
                if (!file.Key) {
                    throw new Error("File object does not have a Key property");
                }
            
                const { Key, Size, LastModified } = file;
            
                const getCommand = new GetObjectCommand({
                    Bucket: bucketName,
                    Key,
                });
            
                const url = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 });
            
                // Extract folder name from the key
                const folderName = Key.split("/")[0]; // Assuming folders are the first part of the key
            
                return { url, folderName, size: Size, lastModified: LastModified };
            })
        );

        const randomizedUrls = urls.sort(() => Math.random() - 0.5);

        return NextResponse.json({ urls: randomizedUrls });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
