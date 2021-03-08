const { DataStore } = require('notarealdb');

const store = new DataStore('./data');
// this is fake data to simulate a real database hence the name "notrealdb"
module.exports = {
  companies: store.collection('companies'),
  jobs: store.collection('jobs'),
  users: store.collection('users')
};
