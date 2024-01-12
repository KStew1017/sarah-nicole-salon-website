import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/login", /^\/images\/.*/, "/stylists", "/gallery", /^\/stylists\/.*/, "/api/s3-get", /^\/api\/s3-get\/\w+$/, "/api/s3-post", /^\/api\/s3-post\/\w+$/, "/api/db-patch", /^\/api\/db-patch\/\w+$/, "/api/db-get", /^\/api\/db-get\/\w+$/,]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};