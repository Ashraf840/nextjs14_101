// NB: This nested layout replaces the children props from the root layout. The page.tsx file inside this dir will replaces the children props from this layout file.
export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <p>Featured Products</p>
            {/* Carousel of featured products */}
        </>
    )
}