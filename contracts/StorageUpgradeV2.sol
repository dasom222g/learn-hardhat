// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract StorageUpgradeV2 {
  uint256 storedData;
  uint256 storedKey;

  event Chage(string message, uint256 newValue);

  function get() public view returns (uint256) {
    return storedData;
  }

  function set(uint256 x) public {
    require(x < 7000, 'Should be less than 7000');
    storedData = x;
    emit Chage('set', x);
  }

  function getKey() public view returns (uint256) {
    return storedKey;
  }

  function setKey(uint256 x) public {
    storedKey = x;
  }
} 