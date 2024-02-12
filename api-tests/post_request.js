const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

describe("POST API request test case starts here", async () => {
    it("should be able post a user", async () => {
        const randomName = faker.person.fullName();
        const randomJobTitle = faker.person.jobTitle();
        const res = await axios.post('https://reqres.in/api/users',
            {
                "name": randomName,
                "job": randomJobTitle
            }
        ).then(res => res.data)
        expect(res.name).equal(randomName);
        expect(res.job).equal(randomJobTitle);
    })
})