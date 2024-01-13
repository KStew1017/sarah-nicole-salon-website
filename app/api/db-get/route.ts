import Stylist from "@/models/Stylist";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const stylists = await Stylist.find();
        return NextResponse.json({ stylists });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
