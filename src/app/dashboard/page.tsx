import { Suspense } from 'react'
import Weather from '../components/Weather'
import PostFeed from '../components/PostFeed'

export default function Posts() {
    return (
        <section>
            <Suspense fallback={<p>Loading feed...</p>}>
                <PostFeed />
            </Suspense>
            <Suspense fallback={<p>Loading weather...</p>}>
                <Weather />
            </Suspense>
        </section>
    )
}