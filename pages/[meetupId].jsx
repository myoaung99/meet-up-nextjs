import React from "react";
import { useRouter } from "next/router";
import Meetup from './../model/Meetup'
import Head from 'next/head'
import MeetupDetail from "../components/meetups/MeetupDetail";
import connectMongoose from "../utils/connect-database";

const MeetupDetailPage = (props) => {
  const { id, title, image, address, description } = props;
  const router = useRouter();
  const { meetupId } = router.query;

  return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description}/>
        </Head>

    <MeetupDetail
      id={id}
      title={title}
      image={image}
      address={address}
      description={description}
    />
      </>
  );
};

export default MeetupDetailPage;

export async function getStaticPaths() {
  await connectMongoose();
  const meetups = await Meetup.find({}, {_id: 1});
  return {
    paths: meetups.map(meetup=>({params: {meetupId: meetup._id.toString()}})),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  await connectMongoose();
  const meetup = await Meetup.findOne({_id: meetupId}, );
  return {
    props: {
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      description: meetup.description,
    },
  };
}
