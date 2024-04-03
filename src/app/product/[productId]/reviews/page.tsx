import React from 'react'

type ProductReviewsProps = {
    params: { productId: string }
}

export default function ProductReviews({ params }: ProductReviewsProps) {
    return (
        <>
            <h1>Product Review List</h1>
            <h2>Product No. {params.productId}</h2>
        </>
    )
}
