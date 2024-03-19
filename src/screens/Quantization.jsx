
import { useState } from 'react'
import Screen from '../components/Screen'
import Back from '../components/Back'
import pageAnimation from '../data/pageAnimation'

function Quantization() {
  const [ textClass, setTextClass ] = useState("text-xl mb-5")
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
              Quantization Tutorial</h1>
          </div>
        </div>
      </div>
      <div className='w-full text-white'>
        {/* <br /><br /> */}
        <div className={textClass}>
          ·VIP upgrade standard·
          <br />
          VIP1 30USDT-500USDT currency assets
        </div>
        <div className={textClass}>
          VIP2 500USDT-3000USDT currency assets + (5 direct subordinates need to be invited, and each subordinate has a cumulative deposit of 100 USDT.)
        </div>
        <div className={textClass}>
          VIP3 3000USDT-10000USDT currency assets + (10 direct subordinates need to be invited, and each subordinate must recharge a total of 100 USDT.)
        </div>
        <div className={textClass}>
          VIP4 10000USDT-30000USDT currency assets + (20 direct subordinates need to be invited, and each subordinate must deposit 100 USDT in total. )
        </div>
        <div className={textClass}>
          VIP5 30000USDT-100000USDT currency assets + (required Invite 30 direct subordinates, and each subordinate will deposit a total of 100 USDT.)
        </div>
        <div className={textClass}>
          VIP6 100000USDT-999999USDT currency assets + (need to invite 50 direct subordinates, each subordinate has a cumulative recharge of 100 USDT)
        </div>
        <div className={textClass}>
          ·Overview of SN quantification·
          <br /> <br />
          Quantification introduction
        </div>
        <div className={textClass}>
          Global encryption There are many currency exchanges, and all major mainstream cryptocurrencies have been listed on major exchanges. The real-time price of the same cryptocurrency on major exchanges is different. Users buy on the exchange with the lowest market price, and then buy on the exchange with the highest market price. Sell ​​on the exchange and earn the difference.
        </div>
        <div className={textClass}>
          Manual trading requires a huge amount of manpower, material resources and time to monitor and collect data quotes from different exchanges and then complete the transaction. This process may lead to missing the best trading opportunities, resulting in reduced profits or even asset shrinkage.
        </div>
        <div className={textClass}>
          So the SN automatic quantification system emerged to avoid manual problems and increase the profit rate of quantitative transactions.
        </div>
        <div className={textClass}>
          SN automatic quantification system can automatically search for the lowest selling price of BTC, ETH, USDT and other digital currencies on major exchanges, and within a few seconds Buy quickly.
        </div>
        <div className={textClass}>
          When the currency price reaches the selling price automatically set by the system, it will be sold quickly within a few seconds.
        </div>
        <div className={textClass}>
          In just a few minutes, you can automatically complete the process of buying at a low price and selling at a high price, and quickly complete a quantitative transaction.
        </div>
        <div className={textClass}>
          Collect data 24 hours a day without interruption, without manual observation of the market, and earn profits efficiently and stably. This is the SN automatic quantification system.
        </div>
        <div className={textClass}>
          How to make money
        </div>
        <div className={textClass}>
          Click the start automatic quantification button and it will be completed in 1-3 minutes Automatic quantitative trading.
        </div>
        <div className={textClass}>
          50% of the income from completing an automatic quantitative transaction is the profit earned by the platform, and the remaining 50% of the profit belongs to the user.
        </div>
        <div className={textClass}>
          For example: buy BTC at 5,000 USDT on Binance and sell it at 5,050 USDT on Eureka, earning a profit of 50 USDT. The platform will take away 25 USDT of profit, and the remaining 25 USDT of profit will belong to the user.
        </div>
        <div className={textClass}>
          Introduction to VIP level income
        </div>
        <div className={textClass}>
          VIP1: You can conduct automatic quantitative transactions 4 times a day. The yield on daily quantitative trading is stable between 2.0% and 2.5%.
          <br />
          500USDT can earn between 10USDT and 12.5USDT a day.
        </div>
        <div className={textClass}>
          VIP2: Automatic quantitative trading can be carried out 5 times a day, and the daily profit rate of quantitative trading is stable between 2.5%-3.0%.</div>
        <div className={textClass}>
          3000USDT can earn between 75USDT-90USDT a day.
        </div>
        <div className={textClass}>
          VIP3: Automatic quantitative trading can be carried out 6 times a day, and the daily profit rate of quantitative trading is stable between 3.0%-3.5%.
          <br />
          10,000USDT can earn between 300USDT-350USDT a day.
        </div>
        <div className={textClass}>
          VIP4: Automatic quantitative trading can be carried out 7 times a day, and the daily profit rate of quantitative trading is stable between 3.5% and 4.0%.
          <br />
          30,000USDT can earn between 1,050USDT-1,200USDT a day.
        </div>
        <div className={textClass}>
          VIP5: You can perform automatic quantitative transactions 8 times a day, and the daily profit rate of quantitative transactions is stable between 4.0%-4.5%.
          <br />
          100000USDT can earn between 4000USDT-4500USDT a day.</div>
        <div className={textClass}>
          VIP6: Automatic quantitative trading can be carried out 9 times a day, and the daily profit rate of quantitative trading is stable between 4.5% and 5.5%.
          <br />
          1,000,000 USDT can earn between 45,000 USDT and 55,000 USDT in one day.</div>
      </div>
    </Screen >
  )
}

export default Quantization
