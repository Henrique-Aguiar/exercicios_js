import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export const Post = () => {
    const params = useParams()
    const { id } = params
    const [qs] = useSearchParams()
    return (
        <div>
            <h1>Post {`param: ${id} QS: ${qs.get('segunda')}`}</h1>
        </div>
    )
}