const axios = require("axios");
const { expect } = require("chai");

describe("GET API request test case starts here", async () => {
    it("should be able get user list", async () => {
        const res = await axios.get('http://localhost:3000/api/v2/test/testmagic');
        expect(res.data.data).equal(true)
    })
});