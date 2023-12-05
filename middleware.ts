import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/stylists", "/gallery", /^\/stylists\/.*/, "/api/s3-get", /^\/api\/s3-get\/\w+$/]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};