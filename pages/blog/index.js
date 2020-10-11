import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/blog').then((res) => res.json()).then(setData);
    }, []);

    return <section>
        <Link href='/'>Назад</Link>
        <ul>
            {
                data.map(
                    d => <li key={d.id}>
                        <h2>{d.title}</h2>
                        <p>{d.article}</p>
                        <p>{d.author}</p>
                    </li>
                )
            }
        </ul>
    </section>;
}

export default Blog