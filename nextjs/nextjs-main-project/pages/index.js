import MeetupList from '../components/meetups/MeetupList';
import {MongoClient} from 'mongodb';
import Head from 'next/head';
import {Fragment} from 'react';

// const DUMMY_MEETUPS=[
//     {
//         id: 'm1',
//         title: 'A first Meetup',
//         image: 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg',
//         address: 'Some address 5,12345',
//         description: 'This is the first meetup'
//     },
//     {
//         id: 'm2',
//         title: 'A second Meetup',
//         image: 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg',
//         address: 'Some address 10,12345',
//         description: 'This is the second meetup'
//     }
// ];

function HomePage(props) {
    return <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name='description' content='Browse meetups here' />
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>;
}

// export async function getServerSideProps(context) {
//     const req=context.req;
//     const res=context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {

    const client=await MongoClient.connect('mongodb+srv://readWriteAnyDatabase:2DVvOYM0stj3VM9k@cluster0.ie8i8.mongodb.net/meetups?retryWrites=true&w=majority');
    const db=client.db();

    const meetupsCollection=db.collection('meetups');

    const meetups=await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
}

export default HomePage;