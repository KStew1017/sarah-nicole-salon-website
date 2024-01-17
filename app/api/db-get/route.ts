import Stylist from "@/models/Stylist";
import { revalidatePath } from "next/cache";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    // const path = req.nextUrl.searchParams.get('path');
    
    // if (path) {
    //     revalidatePath(path);
    //     const stylists = await Stylist.find();
        
    // }
    try {
        const stylists = await Stylist.find();
        return NextResponse.json({ stylists });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
