const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

describe("PATCH API request test case starts here", async () => {
    it("should be able update name of the user", async () => {
        const randomName = faker.person.fullName();
        const res = await axios.patch('https://reqres.in/api/users/2',
            {
                "name": randomName
            }
        ).then(res => res.data)
        console.log(res);
        expect(res.name).equal(randomName);
    })
})