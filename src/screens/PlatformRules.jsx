import { useState } from 'react'
import Screen from '../components/Screen'
import Back from '../components/Back'
import pageAnimation from '../data/pageAnimation'

import rulesImage from '../assets/images/platform-rules.png'
function PlatformRules() {
  const [ textClass, setTextClass ] = useState("text-xl text-white mb-5")
  return (
    <Screen
      {...pageAnimation}
    >
      <div className='bg-slate-800 text-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <div>
            <Back />
          </div>
        </div>
      </div>
      <div className='w-full mb-5' >
        <img src={rulesImage} alt="" />
      </div>
      <div className='rounded-lg w-full px-5 py-3 bg-slate-800'>
        <p className={textClass}>【Platform Rules】</p>
        <p className={textClass}>
          (1) New users who join ATMASLIFE need to complete 12 quantifications before they can withdraw money.
        </p>
        <p className={textClass}>
          (2) ATMASLIFE prohibits malicious opening of multiple accounts, and it is strictly prohibited to use false information to register ATMASLIFE.
        </p>
        <p className={textClass}>
          (3) ATMASLIFE strictly prohibits the use of fraudulent means to obtain bonuses. The system will be checked from time to time.
          <br />
          &nbsp;If a team is found to have maliciously violated ATMASLIFE rules, they will be punished accordingly. In serious cases, the account will be permanently frozen!
        </p>
        <p className={textClass}>
          (4) One wallet can only be used for one ATMASLIFE account, and one wallet is prohibited from using multiple ATMASLIFE accounts.

          (5) Multiple people are prohibited from using one ATMASLIFE account!
        </p>
        <p className={textClass}></p>
        <br />
        <p className={textClass}>
          &nbsp;【ATMASLIFE User Guide】
        </p>
        <p className={textClass}>
          (1) Do not save the account number and password when logging in, do not log in automatically, remember the account number and password!
        </p>
        <p className={textClass}>
          (2) Users are requested to protect their privacy and financial security, and are prohibited from maliciously stealing company and user assets!
        </p>
        <p className={textClass}>
          (3) It is strictly prohibited to maliciously slander ATMASLIFE, spread harmful remarks and other offensive behaviors!
        </p>
        <p className={textClass}>
          (4) Malicious impersonation of ATMASLIFE official personnel is prohibited. ATMASLIFE officials will never ask customers for their wallet addresses and passwords. Please pay attention to distinguish each user!
        </p>
        <p className={textClass}>
          &nbsp;(5) Carefully analyze user feedback and suggestions, properly handle ATMASLIFE user complaints and dissatisfaction, and win the trust and loyalty of customers.
        </p>
        <p className={textClass}>
          (6) Continuously improve the quality of products and services, increase user return rates, and at the same time improve the platform to increase ATMASLIFE’s visibility and reputation!
        </p>
        <p className={textClass}>
          (7) ATMASLIFE promises to keep all users’ registration information and private information absolutely confidential. ATMASLIFE provides the greatest security guarantee for users’ registration information. At the same time, users must keep passwords, personal accounts and other information confidential to avoid being stolen or tampered with. In addition, if you discover any illegal use of your user account or security breach, please contact the ATMASLIFE Online Administrator immediately.
        </p>
        <p className={textClass}>
          (8) ATMASLIFE protects its legitimate rights and interests in accordance with the law, and the final interpretation rights and all terms belong to ATMASLIFE!
        </p>
      </div>

    </Screen>)
}

export default PlatformRules