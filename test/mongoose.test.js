const chai = require('chai');
const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config(); 

const expect = chai.expect;

describe('User Model', () => {
  before(async () => {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   
  });

  after(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });


  it('should create a new user', async function () {
    await User.createUser('parita ganatra', 'parita.ganatra@yudiz.com');
    const users = await User.getAllUsers();
    expect(users).to.have.lengthOf(1);
  });

  it('should update a user', async function () {
    await User.createUser('parita ganatra', 'parita.ganatra@yudiz.com');
    const users = await User.getAllUsers();
    const userId = users[0]._id;
    await User.updateUser(userId, 'pari ganatra');
    const updatedUsers = await User.getAllUsers();
    expect(updatedUsers[0].sName).to.equal('pari ganatra');
  });

  it('should delete a user', async function () {
    await User.createUser('parita ganatra', 'parita.ganatra@yudiz.com');
    const users = await User.getAllUsers();
    const userId = users[0]._id;
    await User.deleteUser(userId);
    const remainingUsers = await User.getAllUsers();
    expect(remainingUsers).to.have.lengthOf(0);
  });

});
