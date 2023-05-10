import * as Phaser from 'phaser';

declare global {
    interface Window {
        Modal: any;
        SolanaWalletConnectorPlugin: any;
        SolflareAdapter: any;
        rpc: any;
    }
}

export default class LoginScene extends Phaser.Scene {
    constructor() {
        super('login');
    }

    preload() { }

    create() {
        let startButton = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Start game',
            {
                fontSize: '32px',
            })
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on(Phaser.Input.Events.POINTER_DOWN, async () => {
                await this.login();
                this.startGame();
            })
            .on(Phaser.Input.Events.POINTER_OVER, () => startButton.setStyle({ fill: '#f39c12' }))
            .on(Phaser.Input.Events.POINTER_OUT, () => startButton.setStyle({ fill: '#FFF' }))
    }

    async login() {
        const clientId =
            "BP-lbstza-Az7NqN49vUUgTWD3mVhIUACwjjbZnTrOFq0pOeIgaNNT1mB-IUBrJaVuzvwlzB1djJnELYXly_rK4";
        
        console.log(window.Modal.Web3Auth);
            let web3auth = new window.Modal.Web3Auth({
            clientId,
            chainConfig: {
                chainNamespace: "solana",
                chainId: "0x1", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
                rpcTarget: "https://solana-mainnet.rpc.extrnode.com", // This is the public RPC we have added, please pass on your own endpoint while creating an app
            },
            web3AuthNetwork: "cyan",
        });

        const torusPlugin =
            new window.SolanaWalletConnectorPlugin.SolanaWalletConnectorPlugin({
                torusWalletOpts: {},
                walletInitOptions: {
                    whiteLabel: {
                        name: "Whitelabel Demo",
                        theme: { isDark: true, colors: { torusBrand1: "#00a8ff" } },
                        logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
                        logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
                        topupHide: true,
                        defaultLanguage: "en",
                    },
                    useWalletConnect: true,
                    enableLogging: true,
                },
            });
        await web3auth.addPlugin(torusPlugin);

        const solflareAdapter = new window.SolflareAdapter.SolflareAdapter({
            clientId,
        });
        web3auth.configureAdapter(solflareAdapter);

        await web3auth.initModal();
        const provider = await web3auth.connect();
        console.log(await window.rpc.getAccounts(provider));
    }

    startGame() {
        this.scene.start('chooser');
    }
}