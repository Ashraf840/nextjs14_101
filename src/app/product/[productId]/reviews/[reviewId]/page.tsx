import React from 'react'
import { notFound } from 'next/navigation';

type ReviewDetailProps = {
    params: {
        productId: string;
        reviewId: string;
    }
}

export default function ReviewDetail({ params }: ReviewDetailProps) {
    // This logic can be applied in the searching mechanism
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }

    return (
        <>
            <h1>Review Detail</h1>
            <p>Review ID: {params.reviewId} for product ID: {params.productId}</p>
        </>
    )
}
