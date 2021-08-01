import {Fragment} from "react";
import Link from 'next/link';

function NewsPage() {
    return <Fragment>
        <h1>
            The News Page
        </h1>
        <ul>
            <li>
                <Link href='/news/first-article'>
                    First article
                </Link>
            </li>
            <li>Second article</li>
        </ul>
    </Fragment>;
}

export default NewsPage;