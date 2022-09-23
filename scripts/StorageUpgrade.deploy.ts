import hardhat, { upgrades } from "hardhat";

async function main() {
  // 배포 스크립트
  const StorageUpgrade = await hardhat.ethers.getContractFactory('StorageUpgrade'); // 컨트랙트 가져오기
  const ssu = await upgrades.deployProxy(StorageUpgrade, [500], {initializer: 'set'}) // 값 500으로 초기화

  console.log('배포된 컨트랙트 주소(proxy 컨트랙트): ', ssu.address)
  
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1)
  })