import Stylist from "@/models/Stylist";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    try {
        const stylists = await Stylist.find({});
        return NextResponse.json({ stylists });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
