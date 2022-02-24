import { Express } from "express";
import randomstring from "randomstring";

export const appendRegistration = (app: Express) => {
  app.post("/api/register", async (req, res) => {
    const { body } = req;
    if (
      !body.email ||
      !body.phoneNumber ||
      !body.phoneNumber.prefix ||
      !body.phoneNumber.number
    ) {
      res.sendStatus(400);
      return;
    }
    res.json({ customerId: randomstring.generate() });
  });
};
