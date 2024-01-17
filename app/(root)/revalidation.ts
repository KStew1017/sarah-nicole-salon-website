"use server";

import { revalidatePath } from "next/cache";

export default async function revalidateAction(apiPath: string, routePath: string, layout: boolean,) {
    try {
        revalidatePath(routePath, layout ? "layout" : "page");
        revalidatePath(apiPath);
    } catch (error) {
        console.log("Error in revalidateAction: ", error);
    }
}
