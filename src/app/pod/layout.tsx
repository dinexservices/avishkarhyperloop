import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Pod | Avishkar Hyperloop",
    description: "Technical deep-dive into our hyperloop pod design, levitation systems, braking mechanisms, and propulsion technology.",
};

export default function PodLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
