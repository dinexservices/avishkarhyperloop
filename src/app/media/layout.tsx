import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media Center | Avishkar Hyperloop",
    description: "Explore our latest footage, press releases, and high-resolution assets. Official media resources for Avishkar Hyperloop.",
};

export default function MediaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
