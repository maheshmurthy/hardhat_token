module.exports = async ({getNamedAccounts, deployments, upgrades}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();

  await deploy('Token', {
    from: deployer,
    log: true,
    args: ['Hard Hat Token', 'HHT', 100000],
    proxy: 'postUpgrade'
  });
};
module.exports.tags = ['Token'];

