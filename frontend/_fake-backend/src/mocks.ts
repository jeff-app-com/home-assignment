import randomstring from "randomstring";

export const mocks = {
  Offer: () => ({
    url: "https://jeff-app.com",
    imageUrl: `https://robohash.org/${randomstring.generate()}.png`,
  }),
};
