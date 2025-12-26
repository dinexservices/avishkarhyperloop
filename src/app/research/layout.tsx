import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research & Innovation | Avishkar Hyperloop",
    description: "Explore our academic publications, whitepapers, and technical research advancing hyperloop technology and sustainable transport.",
};

export default function ResearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
