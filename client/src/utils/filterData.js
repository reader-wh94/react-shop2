const continents = [
  {
    "_id": 1,
    "name": "Africa"
  },
  {
    "_id": 2,
    "name": "Europe"
  },
  {
    "_id": 3,
    "name": "Asia"
  },
  {
    "_id": 4,
    "name": "North America"
  },
  {
    "_id": 5,
    "name": "South America"
  },
  {
    "_id": 6,
    "name": "Australia"
  },
  {
    "_id": 7,
    "name": "Antarctica"
  }
];

const prices = [
  {
    "_id": 0,
    "name": "모두",
    "array": []
  },
  {
    "_id": 1,
    "name": "0 ~ 4999원",
    "array": [0, 4999]
  },
  {
    "_id": 2,
    "name": "5999 ~ 9999원",
    "array": [5999, 9999]
  },
  {
    "_id": 3,
    "name": "10000 ~ 19999원",
    "array": [10000, 19999]
  },
  {
    "_id": 4,
    "name": "20000 ~ 29999원",
    "array": [20000, 29999]
  },
  {
    "_id": 5,
    "name": "30000원 이상",
    "array": [30000, 15000000]
  }
];

export {
  continents,
  prices
};