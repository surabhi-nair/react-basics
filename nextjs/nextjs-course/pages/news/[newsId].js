import {useRouter} from "next/router";

function DetailPage() {
    const router=useRouter();

    const newsId=router.query.newsId;

    //send request to beackend to fetch newsItem with id

    return <h1>
        The Detail Page
    </h1>;
}

export default DetailPage;