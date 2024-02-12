const axios = require("axios");
const { expect } = require("chai");

describe("DELETE API request test case starts here", async () => {
    it("should be able delete user with id 2", async () => {
        const apiResponse = await axios.delete('https://reqres.in/api/users/2');
        expect(apiResponse.status).equal(204);
    })
})