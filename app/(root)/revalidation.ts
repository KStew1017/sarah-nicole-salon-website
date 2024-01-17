// "use server";

// import { revalidatePath } from "next/cache";

// export default async function revalidateAction(apiPath: string, routePath: string, layout: boolean,) {
//     try {
//         revalidatePath(routePath, layout ? "layout" : "page");
//         revalidatePath(apiPath);
//     } catch (error) {
//         console.log("Error in revalidateAction: ", error);
//     }
// }

"use server";
import { revalidatePath } from "next/cache";

const clearCachesByServerAction = async (path?: string) => {
    try {
        if (path) {
            revalidatePath(path);
        } else {
            revalidatePath("/");
        }
    } catch (error) {
        console.error("clearCachesByServerAction=> ", error);
    }
};

export default clearCachesByServerAction;
