// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract StorageUpgrade {
  uint256 storedData;

  event Chage(string message, uint256 newValue);

  function get() public view returns (uint256) {
    return storedData;
  }

  function set(uint256 x) public {
    require(x < 5000, 'Should be less than 5000');
    storedData = x;
    emit Chage('set', x);
  }
} 