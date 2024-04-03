import React from 'react'

type ProductDetailProps = {
    params: { productId: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
    return (
        <div>About Product Detail: {params.productId}</div>
    )
}
