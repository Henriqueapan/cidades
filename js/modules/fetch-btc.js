export default function fetchBitcoinInit() {
    fetchBitcoin(10)

    async function fetchBitcoin(brl_qt, url = 'https://blockchain.info/ticker') {
        const numberSpan = document.querySelector('.btc-preco');
        try {
            const btc_response = await fetch(url),
            btc_json = await btc_response.json(),
            btc_brl = btc_json.BRL,
            brlqt_btc = (brl_qt/btc_brl.buy),
            brlqt_str = brl10_btc.toString();

            let firstValueIndex = undefined

            for (let i in brlqt_str) {
                if (brlqt_str[i] !== '0' && !isNaN(brlqt_str[i])) {
                    firstValueIndex = i - 1
                    break
                }
            }
            numberSpan.innerText = `${brl10_btc.toFixed(firstValueIndex)}`
            numberSpan.setAttribute('aria-label', `Preço de 1 BTC:\n R$${btc_brl.buy}`)
        }
        catch {
            numberSpan.innerText = `0.0005`
            numberSpan.setAttribute('aria-label', `Preço de 1 BTC:\n R$$0.0005`)
        }
    }
}