const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

describe("PUT API request test case starts here", async () => {
    it("should be able update a user", async () => {
        const randomName = faker.person.fullName();
        const randomJobTitle = faker.person.jobTitle();
        const res = await axios.put('https://reqres.in/api/users/2',
            {
                "name": randomName,
                "job": randomJobTitle
            }
        ).then(res => res.data)
        expect(res.name).equal(randomName);
        expect(res.job).equal(randomJobTitle);

        
    })
})