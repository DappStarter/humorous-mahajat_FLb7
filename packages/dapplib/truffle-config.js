require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remember promote half area obscure trip'; 
let testAccounts = [
"0x664a2fc6eb7865b25a663d0a20c868aa827ef4c68c234b3db6fc15760d9beef9",
"0xe997adac7f22d8bcee3d9d55b2e887803225f40470cd70adc44e30e9ee2044d4",
"0x1cb06260e6e6da3e1b60b03628de2a1f5c832e2d9712ae171d4a44f19806e60f",
"0x0a3fc94d72b4d6b69158356c655bf6d2a083a014d59fa9c0332d82fc0fc2997d",
"0xf85bd690eb4b4c7e5a3e868fe10a21ecc6d8de161d81561e06037c609186d6d9",
"0x3f7657f00e7b783a20af4633fdb0db10ee7d05a9ff6a3ce3c30a2769bd66b9da",
"0x0d6a8d915d8e541343863a93f93f4a230d92b8b2426937b6b5854092def29eeb",
"0x5a1a66cab5b7ed61dbb60677ffbb27ac737c919df29dec1cd5d58c66d4c6b2de",
"0x3dd8d013ae4683a27fa6bcb32a4c97f46925af2555a22674429ba20aa5c77122",
"0xb8d110893be0632a32e9c5594e133c6a8c996b6d95661377d333f268fbca803b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

