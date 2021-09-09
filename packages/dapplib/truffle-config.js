require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift recipe magic concert grace forest flower gasp'; 
let testAccounts = [
"0x682fd9d6c9ced96913674f6607cf107bb8dbd721da9a2d898c9ef0d2f2c21e6f",
"0x9fd77e0d12ad570e8b610fb7d27dac21a39be8f906bde2321ee3a817068a443a",
"0xea27e7a74fca661af9dc0b4c92d0744a2384e0e78df713a81710ef1ae74c8082",
"0x9477762a2e94cfa932224c363816a772dac1c81a87eb3a42bc6c8643bc6b249d",
"0xabc034fab7e748cac5a4e43c73c9c7d770952d9d9e3d04f2e8e89bece7d1d424",
"0x351132df5d671d89208d7b2e4a85998d2aa5aa919c6517ec2b2c61b3ddb56174",
"0xd1cc5d45c81e8ccef164cc9db3b7f2803a6b89be7d91367c4cf2f836830ba733",
"0x9344f9236b7429a33dd35b11189e5e060280df0a3af0a1d174e9113990c8dfdc",
"0x7a654023645ee6249652c8f2f36c732eafddb07c614381b3285d8ae297d28079",
"0xd974d9041a13d460cfd69f04cba719e311cfc17b294b7de4bc2f004c4851e27e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

