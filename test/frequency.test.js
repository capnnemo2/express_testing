const app = require("../app");
const expect = require("chai").expect;
const supertest = require("supertest");

describe("GET /frequency endpoint", () => {
  it("should return the total number of unique characters", () => {
    return supertest(app)
      .get("/frequency")
      .query({ s: "Booo" })
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.any.keys("unique");
        expect(res.body).to.have.property("unique", 2);
      });
  });

  it("should return the average frequency of characters", () => {
    return supertest(app)
      .get("/frequency")
      .query({ s: "Booo" })
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.any.keys("average");
        expect(res.body).to.have.property("average", 2);
      });
  });

  it("should count the frequency of occurrence of each character", () => {
    return supertest(app)
      .get("/frequency")
      .query({ s: "Booo" })
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("b", 1);
        expect(res.body).to.have.property("o", 3);
      });
  });

  it("should identify the character with the highest frequency", () => {
    return supertest(app)
      .get("/frequency")
      .query({ s: "Booo" })
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("highest", "o");
      });
  });
});
