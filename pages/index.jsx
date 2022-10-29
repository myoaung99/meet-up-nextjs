import React from "react";
import MeetupList from "./../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meet Up 1",
    image:
      "https://q-xx.bstatic.com/xdata/images/hotel/840x460/254415687.jpg?k=47ed904fa4d426dad09e67eac7a7544b37be6ceaa2baa7f5b98b3b54eb958f39&o=",
    address: "10 street, some city.",
    description: "lorem lorem",
  },
  {
    id: "m2",
    title: "Meet Up 2",
    image:
      "https://www.switchbacktravel.com/sites/default/files/articles%20/Camping%20tent%20%28REI%20Co-op%20Base%20Camp%206%20m%29.jpg",
    address: "10 street, some city.",
    description: "lorem lorem",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
