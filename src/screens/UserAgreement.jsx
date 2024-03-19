import { useState } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import pageAnimation from "../data/pageAnimation";
function UserAgreement() {
  const [ textClass, setTextClass ] = useState("text-lg mb-20 text-white")
  return (
    <Screen
      {...pageAnimation}>
      <div className='bg-slate-800 text-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              User Agreement</h1>
          </div>

        </div>
      </div>
      <p className={textClass + " mb-8"}>
        User License Agreement
      </p>
      <p className={textClass}>
        1. General principles
        <br />
        1.1 This User Agreement ("Agreement" or "Terms and Conditions") consists of the text, the Privacy Policy, the Know Your Customer and Anti-Money Laundering Policy, and various rules, statements and instructions that have been or may be published by the Website. This Agreement consists of the text, Privacy Policy, Know Your Customer and Anti-Money Laundering Policy and any rules, statements, instructions, etc. that have been or may be posted on the Website.
        <br />
        1.2 You should read this agreement carefully before using the services provided by this site. If you have any questions or other needs, please consult a professional lawyer. If you do not agree to this Agreement and/or its contents as modified from time to time, you should immediately stop using the services provided by this website or stop accessing this website. Once you enter this website, use any services on this website, or take other similar actions, it means that you understand and fully agree to the contents of this Agreement, including any modifications made by this website to this Agreement at any time.
        <br />
        1.3 You can become a member of this website (hereinafter referred to as a "member") by filling in the relevant information in accordance with the requirements of this website and successfully registering after completing other relevant procedures. During the registration process, clicking the "Agree" button means that you have reached an agreement with our company in the form of electronic signature; or when you use this website, click any button marked "Agree" or a similar meaning or as permitted by this website. When you actually use the services provided by this website in other ways, it means that you fully understand, agree and accept that all terms under this agreement are binding. The absence of your handwritten signature does not affect the legal binding force of this agreement on you.
        <br />
        1.4 After becoming a member of this website, you will receive a member account and corresponding password, which you will keep for yourself; you shall bear legal responsibility for all activities and events conducted using your account.
        <br />
        1.5 Only members of this website can use the digital asset trading platform provided by this website for transactions and enjoy other services provided by this website that are only open to members; non-members can only access this website, browse this website and other services provided by this website.
        <br />
        1.6 By registering and using any services and functions provided by this website, you will be deemed to have read, understood and:
        <br />
        1.6.1 Accept all terms and conditions of this Agreement.
        <br />
        1.6.2 You confirm that you are over 16 years old or of legal age to enter into contracts under different applicable laws, and that your registration, sale or purchase, posting of information and receipt of other services on this website shall be in accordance with the jurisdiction of the sovereign over you The relevant laws and regulations of the country or region, and you have sufficient ability to accept these terms and conduct transactions and use this website for digital asset transactions.
        <br />
        1.6.3 You guarantee that all digital assets belonging to you involved in the transaction are legally obtained and owned by you.
        <br />
        1.6.4 You agree that you are solely responsible for your transactions or non-transactions and for any gains or losses.
        <br />
        1.6.5 You confirm that the information provided during registration is true and accurate.
        <br />
        1.6.6 You agree to comply with any relevant legal requirements for tax purposes, including reporting any trading profits.
        <br />
        1.6.7 You agree not to engage in or participate in behaviors or activities that are detrimental to the interests of this website or the company at any time, whether or not related to the services provided by this website.
        <br />
        1.6.8 This agreement only applies to the rights and obligations agreed between you and us, and does not cover the legal relationships and legal disputes arising from digital asset transactions between users of this site and other website users, or between you and other users.
      </p>
      {/* modification */}
      <p className={textClass}>
        2. Modification of Agreement
        <br />
        We reserve the right to revise this Agreement from time to time and announce the changes by posting them on the website without further notifying you. The time of the changed Agreement will be indicated on the homepage of this Agreement. Changes will be effective immediately upon posting on the Site. If you do not agree with the modifications, you should immediately stop using the Service; continuing to use the Service means that you accept and agree to be bound by the revised Agreement.
      </p>
      <p className={textClass}>

        3.Register
        <br />
        3.1 Eligibility for registration
        <br />
        You acknowledge and register that you complete the registration process or actually use the services provided by this website in other ways permitted by this website. Once you click the registration button, it means that you or your authorized agent have agreed to the contents of this Agreement and that your agent will register and use the services of this website. If you do not have the above-mentioned subject qualifications, you and your authorized agent shall bear all consequences arising therefrom. The company reserves the right to cancel or permanently freeze your account and hold you and your authorized agent accountable.
        <br />
        3.2 Purpose of registration
        <br />
        You acknowledge and promise that your registration on this website is not for the purpose of violating laws and regulations or disrupting the order of digital asset transactions on this website.
        <br />
        3.3 Registration process
        <br />
        3.3.1 You agree to provide a valid email address, mobile phone number and other information as required on the user registration page of this website. You can use the email address, mobile phone number you provided or confirmed or other methods allowed by this website to log in to this website. a way. If necessary, according to relevant laws and registration in different jurisdictions, you must provide your real name, identity document and other relevant information as stipulated by law and the registration page, and promptly update the information on the registration page to meet the timeliness of the registration page. , exhaustiveness and accuracy. All information initially typed will be referenced as contract information. You are responsible for the authenticity, completeness and accuracy of such information, and bear any direct or indirect losses and adverse consequences arising therefrom.
        <br />
        3.3.2 If the laws, regulations, rules, orders and other regulations of your sovereign country or region have real-name requirements for email addresses, you agree to provide a registered email address to register with your real name, and if you do not provide it as required, you will be Any direct or indirect losses and adverse consequences caused shall be borne by you.
        <br />
        3.3.3 After you provide the information required for registration legally, completely, and effectively and verify it, you have the right to obtain an account and password for this website.
        <br />
        3.3.4 You agree to receive emails and/or short messages from the website related to the administration and operation of the website.
      </p>

      <p className={textClass}>
        4. Serve
        <br />
        This website only provides online trading platform services for your digital asset trading activities (including but not limited to digital asset trading and other services) conducted through this website.
        <br />
        4.1 Service content
        <br />
        4.1.1 You have the right to browse the real-time market conditions and transaction information of various digital asset products on this website, and you have the right to submit digital asset transaction instructions and complete digital asset transactions through this website.
        <br />
        4.1.2 You have the right to view the information under your membership account on this website and use the functions provided by this website to operate.
        <br />
        4.1.3 You have the right to participate in website activities organized by this website in accordance with the activity rules published on this website.
        <br />
        4.1.4 Other services this website promises to provide you.
        <br />
        4.2. Service Rules You promise to abide by the following service rules of this website:
        <br />
        4.2.1 You shall abide by the provisions of laws, regulations and policy requirements, ensure the legality of the sources of all digital assets in your account, and shall not engage in illegal or other activities that damage the rights and interests of this website or third parties on this website or use the services of this website, including But it is not limited to sending or receiving any illegal, illegal or infringing information on the rights of others, sending or receiving marketing materials or other harmful information, or once your account funds are complained, you must cooperate with the platform to review the information and collect evidence.
        <br />
        4.2.2 You should use and keep your account, login password, fund password, and registered email number in compliance with laws and regulations. You are fully responsible for any operations and consequences performed using your account and login password, fund password, and mobile phone verification code. When you find that your account, login password or fund password, verification code has been used by a third party without authorization, or there are other account security issues, you should immediately and effectively notify this website and request this website to suspend this website's account services.
        <br />
        4.2.7 Due to the current special international situation, a large amount of funds have been withdrawn from sensitive countries or regions (the United States, Russia, Ukraine, China, Taiwan, etc.). You must ensure that your funds are legitimate and must not exploit the decentralized nature of the Site to engage in any form of terrorist, political, military or anti-religious activity, and refuse to fund such groups and individuals.
        <br />
        4.2.8 You shall abide by this Agreement and other service terms and operating rules published and updated by this website from time to time, and have the right to terminate the use of the services provided by this website at any time.
        <br />
        4.2.9 Submit order
        <br />
        After reviewing the transaction information and confirming it is correct, you can submit your transaction order. When you submit a trading order, it means that you authorize this website to perform corresponding transaction aggregation on your behalf. When there is a transaction that matches your entrusted price, this website will automatically complete the aggregation transaction without prior notice.
        <br />
        4.3.0 View transaction details
        <br />
        You can view the corresponding transaction records through your account.
        <br />
        4.3.1 Cancellation/modification of orders. You have the right to cancel or modify your order at any time before it is completed.
      </p>
      <p className={textClass}>
        5. Rights and obligations of this website
        <br />
        5.1 If you do not have the registration qualifications stipulated in this agreement, this website has the right to refuse your registration. For those who have already registered, this website has the right to cancel your membership account. This website reserves the following rights: to pursue you or your authorized agent Responsibility. At the same time, this website reserves the right to decide whether to accept your registration under any other circumstances.
        <br />
        5.2 Based on its own judgment, this website has the right to suspend or terminate your account and all associated accounts if it finds that you or your associated account users are not suitable for high-risk investments.
        <br />
        5.3 If this website finds that the account user is not the initial registrant of the account, it has the right to suspend or terminate the use of the account.
        <br />
        5.4 When this website reasonably suspects that the information you provide is incorrect, inaccurate, invalid or incomplete through technical testing and manual sampling, it has the right to notify you to correct, update the information or suspend or terminate the website services and other testing methods.
        <br />
        5.5 If the information displayed on this website is found to be obviously incorrect, we have the right to correct it.
        <br />
        5.6 This website reserves the right to modify, suspend or terminate the services of this website at any time. This website exercises the right to modify or suspend services without notifying you; if this website terminates one or more services of this website, the termination shall commence from this website. The website shall be effective on the date of publication of the termination notice on this website.
        <br />
        5.7 This website will adopt necessary technical means and management measures to ensure the normal operation of this website, provide necessary and reliable trading environment and trading services, and maintain the order of digital asset transactions.
        <br />
        5.8 If you do not use this website’s membership account and password to log in to this website for one consecutive year, this website has the right to cancel your website account. After logging out, this website has the right to open the corresponding member name for registration by other users.
        <br />
        5.9 Tax Liability When the available funds in your trading account exceed the funds you deposited, a tax audit will be triggered every time you withdraw funds. If there are no tax disputes in your account, your funds will arrive in your external wallet quickly, otherwise the system will limit some functions of your account and send tax-related emails to your email inbox. Due to the anonymity and untraceability of cryptocurrencies, you cannot use the funds available in your trading account for tax purposes and you need to pay the corresponding amount of cryptocurrencies using an external wallet calculated by the system. If you have any concerns or questions, you can consult our online customer service for detailed help before using your account.
      </p>
      <p className={textClass}>
        6.Compensation
        <br />
        6.1 In no event will our liability to you for direct damages exceed the total service fees we charged you for your use of the Site during a three (3) month period.
        <br />
        6.2 If you violate this Agreement or other laws and regulations, you shall compensate us for at least US$2 million and all resulting expenses (including attorney fees, etc.), which shall be borne by you. If it is not enough to cover actual losses.
      </p>

      <p className={textClass}>
        7. Right to seek injunctive relief
        <br />
        We and you acknowledge that common law remedies for a breach or threatened breach by you may not be sufficient to cover the full losses we suffer and we will therefore be entitled to seek injunctive relief and all other common law remedies in the event of a breach or threatened breach by you. or as equity allows.
      </p>
      <p className={textClass}>
        8. Limitation and Exclusion of Liability
        <br />
        8.1 You understand and agree that we will not be liable under any circumstances.
        <br />
        8.1.1 Loss of Revenue.
        <br />
        8.1.2 Trading profits or contract losses.
        <br />
        8.1.3 Losses caused by business interruption.
        <br />
        8.1.4 Anticipated loss of monetary savings.
        <br />
        8.1.5 Losses caused by information problems.
        <br />
        8.1.6 Loss of opportunity, goodwill or reputation.
        <br />
        8.1.7 Data corruption or loss.
        <br />
        8.1.8 Cost of purchasing substitute products or services.
        <br />
        8.1.9 Any indirect, special or incidental loss or damage arising from tort (including negligence), breach of contract or any other reason, whether or not such loss or damage is reasonably foreseeable by us; whether we have been informed of the occurrence of such loss in advance or possibility of damage.
        <br />
        Sections 8.1.1 to 8.1.9 are independent of each other.
        <br />
        8.2 You understand and agree that we are not responsible for your damages caused by the following circumstances.
        <br />
        8.2.1 There may be a material breach in your particular transaction
        <br />
        8.2.2 Your behavior on this site is suspected of being illegal or immoral.
        <br />
        8.2.3 Expenses and losses incurred as a result of purchasing or obtaining any data or information, conducting transactions, or alternative actions through the services of this website.
        <br />
        8.2.4 Your misunderstanding of the services of this website.
        <br />
        8.2.5 Any other losses not caused by us related to the services provided by this website.
        <br />
        8.3 We are not responsible for any loss or damage caused by information network equipment maintenance, information network connection failure, computer, communication or other system failure, power outage, weather, accidents, strikes, labor disputes, riots, riots, riots, etc. Liability, lack of productivity or means of production, fire, flood, storm, explosion, war, banking or other partner reasons, digital asset market collapse, government actions, judicial or administrative authorities, other actions beyond our control or beyond our ability to control, or third parties. Orders, other actions or third parties over which we have no or no control, we will not be liable for any failure to provide service or delay in service, or for any loss you may suffer.
        <br />
        8.4 We cannot guarantee that all information, programs, texts, etc. contained in this website are completely safe and free from interference and destruction by viruses, Trojan horses and other malicious programs. Therefore, this is your personal decision, and the risks and possible consequences are borne by you. Log in, use any services on this website or download and use downloaded programs, information, data, etc.
        <br />
        8.5 We do not guarantee or promise any information, products and services of any third-party website linked to this website or any other form of content that is not our subject. If you use any services, information and products provided by third parties, it is your personal decision and you bear all responsibilities arising therefrom.
        <br />
        8.6 We make no warranties, express or implied, regarding your use of the services on this website, including but not limited to the suitability, freedom from errors or omissions, continuity, accuracy, reliability and fitness for a particular purpose of the services provided on the website. At the same time, we do not make any commitment or guarantee as to the validity, accuracy, correctness, reliability, quality, stability, completeness and timeliness of the technology and information involved in the services provided by this website. The decision to access or use the services provided by this website rests with you, and the risks and possible losses are borne by you. You understand and understand that digital asset markets are volatile, prices and values may fluctuate significantly or plummet at any time. Trading digital assets is your own free choice and decision, and you bear your own risks and possible losses.
        <br />
        8.7 Our warranties and undertakings set out in this Agreement are the only warranties and representations we make in relation to this Agreement and the services provided on the Website and are in lieu of all other warranties and undertakings, whether written or oral, express or implied , by any other means or means. All such warranties and representations represent our own commitments and guarantees only and do not guarantee that any third party will comply with the guarantees and commitments set forth in this Agreement.
        <br />
        8.8 We do not waive any right not mentioned in this Agreement to limit, exclude or offset our liability for damages to the fullest extent applicable law.
        <br />
        8.9 By registering, you acknowledge that any action we take in accordance with the rules set out in this Agreement shall be at your risk.
      </p>
      <p className={textClass}>
        9. Termination of Agreement
        <br />
        9.1 This website has the right to terminate all services of this website in accordance with the provisions of this agreement. This agreement shall terminate on the date of termination of all services of this website.
        <br />
        9.2 After the termination of this Agreement, you have no right to require this website to continue to provide you with any services or perform any other obligations, including but not limited to requiring this website to retain or disclose to you any information account in its original website, to you or a third party Forward any information that they have not read or sent, etc.
        <br />
        9.3 The termination of this agreement shall not affect the breaching party's other liabilities to recover from the breaching party.
      </p>

      <p className={textClass}>
        10. Intellectual property rights
        <br />
        10.1 All intellectual property rights in all intellectual works contained in this website, including but not limited to website logos, databases, website design, text and graphics, software, photographs, videos, music, sounds and combinations thereof, software compilations, related source code and software (including applets and scripts) are owned by this website. You may not copy, modify, reproduce, transmit or use for commercial purposes any of the foregoing materials or content.
        <br />
        10.2 All rights contained in the name of this site (including but not limited to goodwill, trademarks, and logos) belong to the Company.
        <br />
        10.3 Your acceptance of this agreement shall be deemed as your voluntary transfer of the copyright of any form of information published on this website, including but not limited to: reproduction rights, distribution rights, rental rights, exhibition rights, performance rights, screening rights, which the copyright holder shall exclusively enjoy free of charge. of broadcasting rights, information network dissemination rights, filming rights, adaptation rights, translation rights, compilation rights and other transferable rights. This website will file a separate lawsuit against any subject for infringement of rights and obtain full compensation. This Agreement applies to the content of any copyrighted work you post on the Site, whether the content was formed before or after the execution of this Agreement.
        <br />
        10.4 You shall not illegally use or dispose of the intellectual property rights of this website or others when using the services of this website. You may not publish or authorize other websites (and media) to use the information published on this website in any form.
        <br />
        10.5 Your access to this website or use of any services provided by this website shall not be deemed to be a transfer of any intellectual property rights by us to you.
      </p>
      <p className={textClass}>
        11. Asset protection
        <br />
        Coin withdrawal address risk control. If your withdrawal address is incorrect, the risk control system will lock your account and automatically start the verification process. You must complete the following three steps before the risk control system can identify you and unlock your account.
        <br />
        1) Provide a photo of the KYC document you use to verify your account on our website.
        <br />
        2) Find a white piece of paper with today's date written on it and have your KYC document, your face and the white paper appear in the same photo.
        <br />
        3) Use the original encryption wallet to deposit an amount of 20% of the total account principal to the exchange. Please note that you must complete your deposit to the exchange using your initial crypto wallet, otherwise verification will fail.
      </p>

      <p className={textClass}>
        12. Calculation
        <br />
        All transaction calculations have been verified by us and all calculations are disclosed on the website, but we cannot guarantee that use of the website will be uninterrupted or error-free.
      </p>

      <p className={textClass}>
        13. The rights and obligations stipulated in this Agreement are also binding on the assigns, heirs, executors and administrators of the parties who benefit from such rights and obligations. You may not assign our rights and obligations under this Agreement to any third party without our consent, but we may assign our rights and obligations under this Agreement to any third party at any time by notifying you.
      </p>

      <p className={textClass}>
        14. Divisibility
        <br />
        If any provision of this Agreement is held to be unenforceable, invalid or illegal by any court of competent jurisdiction, the validity of the remaining provisions of this Agreement will not be affected.
      </p>
      <p className={textClass}>
        15.Non-agency relationship
        <br />
        Nothing in this Agreement shall be deemed to create, imply, or otherwise constitute us as your agent, trustee, or other representative, except as otherwise provided in this Agreement.
      </p>
      <p className={textClass}>
        16. Waiver of rights
        <br />
        A waiver by us or either of you of any right to pursue a breach or other liability under this Agreement shall not be deemed or construed as a waiver of any other breach; the failure to exercise any right or remedy shall not in any way be construed as a waiver of such right or remedy. .
      </p>

      <p className={textClass}>
        17. Effectiveness and interpretation of the agreement
        <br />
        19.1 This agreement takes effect when you click to agree to register on the registration page of this website, complete the registration process, and obtain an account and password for this website, and is binding on both this website and you.
        <br />
        19.2 The final interpretation right of this agreement belongs to this website.
      </p>

      <p className={textClass}>Disclaimer</p>

      <p className={textClass}>
        risk warning
        <br />
        1. Digital assets involve significant risks and market transaction uncertainties. In addition, because the total market capitalization of digital currencies is generally small, prices are prone to large fluctuations due to the control of traders and the policies of governments around the world. Due to price fluctuations, you may experience larger profits or losses. Any digital asset can fluctuate significantly or even become worthless.
        <br />
        2. Digital asset transactions may be suspended or prohibited at any time due to the formulation or modification of laws, regulations and normative documents in various countries. When using Xingcoin services, users should evaluate their own risks according to local laws, regulations and policy documents.
        <br />
        3. Users should carefully consider and evaluate the investment value and risks of digital assets based on their own financial conditions, control transaction risks, and bear the economic risk of losing all investments.
      </p>

      <p className={textClass}>
        Rights ownership
        <br />
        All products, technologies, software, programs, data and other information (including text, icons, images, photos, audio, video, graphics, color combinations, layout design within the platform, etc.) are platform services unless otherwise stated by the platform. Proprietary and/or its affiliates. Without the permission of the platform service provider and/or its affiliates, no one may use any content on the platform in an unauthorized manner, including monitoring, copying, transmitting, displaying, mirroring, uploading, downloading, etc. through programs or programs. Robots, spiders and other equipment.
        <br />
        The words and logo of the platform, as well as other logos, logos, product and service names of the platform are the trademarks of the platform service provider and/or its affiliates, and you must obtain prior written authorization from the platform service provider and/or its affiliates . or its affiliates for any purpose such as promotion or display.
      </p>



    </Screen>
  )
}

export default UserAgreement
