import Stylist from "@/models/Stylist";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { useUser } from "@clerk/nextjs";

export async function GET(req: NextApiRequest) {
    const user = useUser();
    const username = user.user?.fullName;

    try {
        const stylists = await Stylist.find({
            name: username,
        });

        return NextResponse.json({
            stylist: stylists[0],
        });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
