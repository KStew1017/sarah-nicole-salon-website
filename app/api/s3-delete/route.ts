import { NextRequest, NextResponse } from "next/server";
import { S3Client, DeleteObjectsCommand } from "@aws-sdk/client-s3";

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

export async function DELETE(req: NextRequest) {
    try {
        const bucketName = "salon-website-images";
        const url = new URL(req.nextUrl);
        const name = url.searchParams.get("name");
        const imageKey = url.searchParams.get("imageKey");

        const deleteCommand = new DeleteObjectsCommand({
            Bucket: bucketName,
            Delete: {
                Objects: [
                    {
                        Key: `${name}-results/${imageKey}`,
                    },
                ],
            },
        });

        const data = await s3Client.send(deleteCommand);

        return NextResponse.json({ deleted: data.Deleted });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
