import { NextRequest, NextResponse } from "next/server";
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

export async function GET(req: NextRequest, res: NextApiResponse) {
    try {
        const bucketName = "salon-website-images";
        const folderName = "becki-results/";

        const listCommand = new ListObjectsV2Command({
            Bucket: bucketName,
            Prefix: folderName,
        });

        const data = await s3Client.send(listCommand);
        const fileKeys = data.Contents?.filter(file => !file.Key?.endsWith('/')).map(file => file.Key) || [];

        return NextResponse.json({ fileKeys });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
