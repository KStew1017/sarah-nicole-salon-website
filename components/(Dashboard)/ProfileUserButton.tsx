import { UserButton } from "@clerk/nextjs";

interface ProfileUserButtonProps {
    firstName: string;
}

export const ProfileUserButton: React.FC<ProfileUserButtonProps> = ({ firstName }) => {
    return (
        <div className="relative group flex justify-center">
            <img
                src={`/images/${firstName}/${firstName}-headshot.jpeg`}
                alt={firstName}
                className="w-[300px] h-[300px] rounded-full transition ease-s-curve group-hover:drop-shadow-xl group-hover:scale-105 group-hover:translate-y-[-10px] object-cover absolute"
            />
            <UserButton
                afterSignOutUrl={"/"}
                appearance={{
                    elements: {
                        userButtonBox: "w-[300px] h-[300px] opacity-0 -z-10",
                        userButtonTrigger: "focus:shadow-none",
                        userButtonAvatarBox:
                            "w-[300px] h-[300px] rounded-full transition ease-s-curve group-hover:drop-shadow-xl group-hover:scale-105 group-hover:translate-y-[-10px]",
                        userButtonPopoverCard: "bg-tan-100 border-2 border-gold font-sans",
                        userPreviewMainIdentifier: "text-grey text-[18px] font-bold",
                        userPreviewSecondaryIdentifier: "text-grey/50",
                        userButtonPopoverActionButton: "hover:bg-tan-200",
                        userButtonPopoverActionButtonText: "text-[16px]",
                        userButtonPopoverActionButtonIcon: "w-[20px] h-[20px]",
                        userButtonPopoverFooter: "hidden",
                    },
                }}
            />
        </div>
    );
};
