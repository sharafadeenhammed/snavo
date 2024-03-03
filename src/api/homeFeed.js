import { api } from "./root"

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,tron,polkadot,link,bitcoin-cash,cardano,ethereum-classic,filecoin&vs_currencies=usd,tether&include_24hr_change=true&precision=2"


const request = api(url);
export async function getCoinData() {
  const response = await request.get();
  if (response.ok) {
    return response.data
  }
  else {
    return null
  }
}




