import React from "react";
import { useRouter } from "next/router";
import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
  const { id, title, image, address, description } = props;
  const router = useRouter();
  const { meetupId } = router.query;

  return (
    <MeetupDetail
      id={id}
      title={title}
      image={image}
      address={address}
      description={description}
    />
  );
};

export default MeetupDetailPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  //* fetch data from databases
  return {
    props: {
      id: meetupId,
      title: "First Meetup",
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/840x460/254415687.jpg?k=47ed904fa4d426dad09e67eac7a7544b37be6ceaa2baa7f5b98b3b54eb958f39&o=",
      address: "Some street 4, Some City",
      description: "This is some description",
    },
  };
}
