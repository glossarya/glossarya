import { useRouter } from 'next/router';
import Link from 'next/link';

const Blog = () => {
    const router = useRouter()
    const { slug } = router.query

    return <section>
        <Link href='/'>Назад</Link>
        <p>Post: {slug}</p>
    </section>;
}

export default Blog