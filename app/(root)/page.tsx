import { GetServerSideProps } from "next";
import HomeClient from "./homeClient";

interface stylistsProps {
    _id: string;
    name: string;
    quote: string;
    bio: string;
    paymentMethods: string[];
    services: string[];
    icons: string[];
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await fetch(`/api/db-get`);
        const data = await res.json();
        return {
            props: {
                initialStylists: data.stylists,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                initialStylists: [],
            },
        };
    }
};

export default function Home({ initialStylists }: { initialStylists: stylistsProps[] }) {

    return (
        <>
            <HomeClient initialStylists={initialStylists} />
        </>
    );
}
