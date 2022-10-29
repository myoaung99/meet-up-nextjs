import mongoose from "mongoose";
import React from "react";
import Meetup from "../model/Meetup";
import connectMongoose from "../utils/connect-database";
import MeetupList from "./../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export default HomePage;

export async function getStaticProps(context) {
  await connectMongoose();

  const meetups = await Meetup.find();

  return {
    props: {
      meetups: meetups.map((m) => ({
        title: m.title,
        address: m.address,
        description: m.description,
        image: m.image,
        id: m._id.toString(),
      })),
    }, // will be passed to the page component as props

    revalidate: 3600, // render page regeneration page process on every 3600s with the fetched data
  };
}
