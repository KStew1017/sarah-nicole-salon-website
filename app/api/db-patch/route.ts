import Stylist from "@/models/Stylist";
import { NextResponse, NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
    try {
        const url = new URL(req.nextUrl);
        const name = url.searchParams.get("name");

        if (!name) {
            throw new Error("Name is required");
        }

        const condition = { name };
        const update = await req.json();

        const updatedStylist = await Stylist.findOneAndUpdate(condition, update, { new: true });
        return NextResponse.json({ updatedStylist });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
