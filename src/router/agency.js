import { Router } from "express";
import Agency from "../models/agency.js";

export const router = Router();
router.post("/add", async (req, res) => {
  const {
    agencyName,
    services,
    agencyDescription,
    email,
    location,
    phoneNumber,
    uid,
    image,
  } = req.body;
  try {
    const agency = await Agency.findOne({ email });
    if (agency) {
      return res.status(400).json({ message: "Agency already exists" });
    }

    const newAgency = new Agency({
      agencyName,
      services,
      agencyDescription,
      email,
      location,
      phoneNumber,
      uid,
      image,
    });
    const savedAgency = await newAgency.save();
    res.status(201).json(savedAgency);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

// get

router.get("/", async (req, res) => {
  try {
    const agency = await Agency.find();

    return res.status(200).json(agency);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

//  getone
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agency = await Agency.findOne({ uid: id });

    res.status(200).json(agency);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agencytoDelete = await Agency.findOneAndDelete({ _id: id });

    res.status(200).json(agencytoDelete);
  } catch (error) {
    return;
  }
});

// update
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agencyToUpdate = await Agency.findByIdAndUpdate(
      { id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(agencyToUpdate);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
