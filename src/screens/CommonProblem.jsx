

import { useState } from 'react'
import Screen from '../components/Screen'
import Back from '../components/Back'
import pageAnimation from '../data/pageAnimation'
function CommonProblem() {
  const [ textClass, setTextClass ] = useState("text-xl text-white font-semibold mb-5")
  return (
    <Screen
      {...pageAnimation}
    >
      <div className='bg-slate-800 text-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <div>
            <Back />
          </div>
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Common problem</h1>
          </div>

        </div>
      </div>
      <p className={textClass}>
        [How to recharge digital currency in SN]
      </p>
      <br />
      <p className={textClass}>
        If you already have digital currency assets, you can transfer them to your SN account through the "recharge" function or "withdrawal" function of the trading platform or wallet where you hold digital assets. Digital assets are recharged through "addresses". You only need to copy the address of the corresponding currency on the SN [Deposit] page to the platform where you have digital assets to transfer your digital assets to your SN account.
      </p>
      <p className={textClass}>
        The specific steps are as follows (if you have any questions during the deposit process, please directly contact customer service staff for answers):
      </p>
      <p className={textClass}>
        Register an SN account, log in to the account, and the [Recharge Coin] entrance will be displayed on the homepage. The recharge currency supports TRC-20.
      </p>
      <p className={textClass}>
        It is recommended that new users recharge USDT (a stable currency anchored to the US dollar, 1 US dollar = 1 USDT) and go to the TRC20 address at the same time. The transfer speed is fast and the commission is relatively cheap.
      </p>
      <p className={textClass}>
        Copy the SN address and fill in the address field of the exchange or wallet that can withdraw coins, fill in the withdrawal amount and wait for the transfer to be confirmed on the chain (the confirmation process takes about 0~10 minutes), and then you can recharge your SN account.
      </p>
      <br />
      <p className={textClass}>* Notes:</p>
      <p className={textClass}>
        During the recharge process, you need to confirm the correctness of the "coin", "chain", and "address". If the recharge is incorrect, it may result in irrecoverability.
      </p>
      <p className={textClass}>
        If you are not sure whether the recharge operation is correct, you can contact customer service or transfer the minimum amount first to confirm that the operation process is correct, and then continue to transfer large amounts.
      </p>
      <p className={textClass}>
        Sometimes there will be congestion on the chain during the deposit process, which may take more than 10 minutes beyond the normal time. You can wait patiently.
      </p>
      <p className={textClass}>
        Since the SN robot is native to USDT (it requires USDT to activate), the main transfers of these four addresses are concentrated in TRC20. It is recommended that novices who want to save money to IDA transfer USDT to SN through the TRC20 chain.
      </p>
      <p className={textClass}></p>
      <br /><br /><br />
      <p className={textClass}>
        [SN currency withdrawal process]
      </p>
      <p className={textClass}>
        If you want to transfer the digital assets in your SN account to other platforms or digital wallets, you can quickly do so through the [Withdraw Coin] function. Digital assets are withdrawn through "addresses". Before withdrawing coins, you need to find the deposit address on the corresponding platform and copy the address to the address on the withdrawal page of the SN platform to withdraw your digital assets to your account on the corresponding platform.
      </p>
      <p className={textClass}>
        * The specific operation steps are as follows:
      </p>
      <p className={textClass}>
        Select the corresponding chain and copy the address of the chain to the wallet or exchange where you deposit.
      </p>
      <p className={textClass}>
        Open the SN coin withdrawal page, select the corresponding currency and the chain corresponding to the deposit wallet or exchange.
      </p>
      <p className={textClass}>
        Fill in the address of the copied chain into the address bar of SN, confirm that the chain and address are correct, and then select OK to withdraw the currency (when withdrawing the currency, please ensure that the currency can be withdrawn).
      </p>
    </Screen>
  )
}

export default CommonProblem
