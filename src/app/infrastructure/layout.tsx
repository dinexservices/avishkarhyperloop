import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Infrastructure | Avishkar Hyperloop",
    description: "Discover our state-of-the-art hyperloop infrastructure, including vacuum tubes and testing tracks designed for high-speed transport.",
};

export default function InfrastructureLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
