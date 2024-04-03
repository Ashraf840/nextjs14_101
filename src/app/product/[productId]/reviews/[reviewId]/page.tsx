import React from 'react'

type ReviewDetailProps = {
    params: {
        productId: string;
        reviewId: string;
    }
}

export default function ReviewDetail({ params }: ReviewDetailProps) {
    return (
        <>
            <h1>Review Detail</h1>
            <p>Review ID: {params.reviewId} for product ID: {params.productId}</p>
        </>
    )
}
