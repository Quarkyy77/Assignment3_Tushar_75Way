import express from "express";
import { User } from "../models/user.models";
import { ShiftingRequest } from "../models/request.models";

export const createShiftRequest = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userId, fromAddress, toAddress } = req.body;
    const user = await User.findById({ _id: userId });
    if (!user) {
      return res.status(404).json({
        message: "user not found...",
      });
    }
    const shiftingRequest = new ShiftingRequest({
      fromAddress,
      toAddress,
      status: "New",
      rent: Math.floor(Math.random() * 10000),
    });
    await shiftingRequest.save();
    user.shiftReq.push(shiftingRequest._id);

    await user.save();
    return res.status(201).json({
      rent: shiftingRequest.rent,
      message: " successfully created shift request...",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Unable to send request...",
    });
  }
};
