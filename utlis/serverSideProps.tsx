import { GetServerSideProps } from "next";

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