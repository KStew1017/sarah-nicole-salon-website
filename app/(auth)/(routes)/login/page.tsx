import { SignIn } from "@clerk/nextjs";

export default function Auth() {
    return (
        <div className="flex items-center relative justify-center mx-auto ">
            <SignIn
                appearance={{
                    elements: {
                        rootBox: "w-[90%] lg:w-[1250px] h-screen flex flex-col justify-center items-center",
                        card: "w-[90%] md:w-[50%] mx-auto rounded-[25px] p-[50px]",
                        logoBox: "h-fit justify-center",
                        logoImage: "hidden",
                        header: "font-serif text-center",
                        headerTitle: "text-[36px] lg:text-[48px] font-bold",
                        headerSubtitle: "text-[18px] lg:text-[24px]",
                        formFieldLabel: "text-[12px] lg:text-[18px] font-bold font-serif",
                        formFieldInput:
                            "text-[10px] lg:text-[16px] font-serif text-black hover:text-black focus:text-black focus:ring-0",
                        formButtonPrimary:
                            "bg-green font-serif tracking-[2px] hover:bg-green text-[10px] lg:text-[14px] p-5",
                        identityPreviewEditButtonIcon: "text-green",
                        formFieldAction__password:
                            "text-green font-serif tracking-[2px] hover:text-green text-[10px] lg:text-[14px]",
                        footer: "hidden",
                        
                    },
                }}
                afterSignInUrl={"/"}
            />
        </div>
    );
}
