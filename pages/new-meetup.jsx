import React from "react";
import Head from 'next/head'
import NewMeetupForm from "./../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = async (data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
  };
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta name='description' content="Create a new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
