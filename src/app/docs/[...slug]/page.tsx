import React from 'react'

type DocsProps = {
    params: {
        slug: string[];
    }
};

export default function Docs({ params }: DocsProps) {

    if (params.slug.length === 3) {
        return (
            <>
                {/* Viewing the nested level: 3; feature1 > concept1 > example1 */}
                <p>Full slug: {params.slug}</p>
                <p>Slug length: {params.slug.length}</p>
            </>
        )
    }
    else if (params.slug.length === 2) {
        return (
            <>
                {/* Viewing the nested level: 3; feature1 > concept1 */}
                <p>Full slug: {params.slug}</p>
                <p>Slug length: {params.slug.length}</p>
            </>
        )
    }
    else if (params.slug.length === 1) {
        return (
            <>
                {/* Viewing the nested level: 3; feature1 */}
                <p>Full slug: {params.slug}</p>
                <p>Slug length: {params.slug.length}</p>
            </>

        )
    }
    return <h1>Docs Home Page</h1>
}
