const leoCoin = artifacts.require("LeoCoin");

contract("Votation Contract", () => {
  before(async () => {
    this.leoCoin = await leoCoin.deployed();
  });

  it("Migrate deployed successfully", async () => {
    const address = await this.leoCoin.address;

    console.log({
      address,
    });

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("Get initial values", async () => {
    const [coinName, coinSymbol, initialSupply] = await Promise.all([
      await this.leoCoin.name(),
      await this.leoCoin.symbol(),
      await this.leoCoin.totalSupply(),
    ]);

    assert.equal(coinName, "Leo Coin");
    assert.equal(coinSymbol, "LEOC");
    assert.equal(initialSupply, 1000000 * 10 ** 18);
  });
});
