import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partners & Sponsors | Avishkar Hyperloop",
    description: "Meet the visionary partners and sponsors supporting Avishkar Hyperloop's mission to revolutionize future transportation.",
};

export default function PartnersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
