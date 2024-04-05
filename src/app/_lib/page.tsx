import React from 'react'

export default function PrivateRoute() {
    return (
        <div>
            You cannot view this page in the browser
            <p>Since it's located inside a private folder, thus makes it a private route</p>
            <p>By tying to visit this page, it'll throw a page-not found error</p>
        </div>
    )
}
