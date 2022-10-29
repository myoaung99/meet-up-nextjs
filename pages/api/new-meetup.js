import mongoose from "mongoose";
import Meetup from "../../model/Meetup";
import connectMongoose from "../../utils/connect-database";

async function handler(req, res) {
  if (req.method === "POST") {
    const { title, image, address, description } = req.body;
    try {
      await connectMongoose();
      const meetup = new Meetup({
        title: title,
        image: image,
        address: address,
        description: description,
      });

      meetup
        .save()
        .then((result) => {
          return res.status(201).send({ success: "New meetup inserted" });
        })
        .catch((err) => res.status(400).send({ error: "Invalid request" }));
    } catch (err) {
      console.log("Connection to Database Fail!");
    }
  }
}

export default handler;
