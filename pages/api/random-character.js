import Chance from "chance";

const chance = new Chance();
const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  age: chance.integer({min: 20, max: 50}),
  country: chance.country(),
  profession: chance.profession(),
  twitter: chance.twitter(),
  geohash: chance.geohash({ length: 5 }),
};

export default function handler(request, response) {
    response.status(200).json(character);
}