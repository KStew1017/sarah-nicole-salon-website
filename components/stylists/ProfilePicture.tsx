interface ProfilePictureProps {
    stylistName: string;
    even: boolean;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ stylistName, even }) => {
    return (
        <img
            src={`/images/${stylistName}/${stylistName}-headshot.jpeg`}
            alt={`${stylistName} headshot`}
            className={`w-[300px] h-[300px] object-cover absolute rounded-full shadow-3xl ${
                even
                    ? "translate-y-[-200px] translate-x-[375px]"
                    : "translate-y-[-200px] translate-x-[-375px]"
            } `}
        />
    );
};
