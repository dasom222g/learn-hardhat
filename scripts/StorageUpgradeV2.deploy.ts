import hardhat, { upgrades } from "hardhat";

async function main() {
  // 배포 스크립트
  const proxyAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
  const StorageUpgradeV2 = await hardhat.ethers.getContractFactory('StorageUpgradeV2'); // 컨트랙트 가져오기
  const ssuV2 = await upgrades.upgradeProxy(proxyAddress, StorageUpgradeV2) // 값 500으로 초기화

  console.log('배포된 컨트랙트 주소(proxy 컨트랙트): ', ssuV2.address)
  
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1)
  })