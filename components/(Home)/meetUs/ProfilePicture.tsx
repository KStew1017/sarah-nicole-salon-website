interface ProfilePictureProps {
    stylistName: string;
    even: boolean;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ stylistName, even }) => {
    return (
        <img
            src={`/images/${stylistName}/${stylistName}-headshot.jpeg`}
            alt={`${stylistName} headshot`}
            className={`z-10 w-[90%] md:w-[75%] lg:w-[300px] lg:h-[300px] object-cover lg:absolute lg:rounded-full rounded-t-[50px] shadow-3xl ${
                even
                    ? "lg:translate-y-[-200px] lg:translate-x-[375px]"
                    : "lg:translate-y-[-200px] lg:translate-x-[-375px]"
            } `}
        />
    );
};
