"use server";

import { revalidatePath } from "next/cache";

export default async function revalidateAction() {
    revalidatePath("/api/db-get");
}