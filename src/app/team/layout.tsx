import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team | Avishkar Hyperloop",
    description: "Meet the passionate students and engineers at IIT Madras building the future of transportation. Join the revolution.",
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
