import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
    return (
        <div className="not-found">
            <h2>Sorry Your page is not found 😭</h2>
            <p>try another page ....😜 💓</p>
            <Link to="/">Back to Home </Link>
            <h1>😘</h1>
        </div>
    )
}
