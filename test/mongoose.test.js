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

  it('should create and save a user', async () => {
    const userData = { sName: 'parita ganatra', sEmail: 'parita.ganatra@yudiz.com' };
    const savedUser = await User.create(userData);

    expect(savedUser._id).to.exist;
    expect(savedUser.sName).to.equal(userData.sName);
    expect(savedUser.sEmail).to.equal(userData.sEmail);
  });

  it('should retrieve a user', async () => {
    const userData = { sName: 'parita ganatra', sEmail: 'parita.ganatra@yudiz.com' };
    const savedUser = await User.create(userData);
   

    const retrievedUser = await User.findOne({ sEmail: 'parita.ganatra@yudiz.com' });

    expect(retrievedUser).to.exist;
    expect(retrievedUser.sName).to.equal(userData.sName);
    expect(retrievedUser.sEmail).to.equal(userData.sEmail);
  });

  it('should retrieve a list of models', () => {
    const models = mongoose.modelNames(); 
    expect(models).to.be.an('array').that.is.not.empty;
   
  });

});
