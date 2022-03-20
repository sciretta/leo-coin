// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LeoCoin is ERC20 {
    constructor(uint256 amount) ERC20 ("Leo Coin","LEOC"){
      _mint(msg.sender, amount * 10 ** 18); 
    }
}