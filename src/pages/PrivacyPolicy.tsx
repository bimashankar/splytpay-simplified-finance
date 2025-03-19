
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <Separator className="mb-8" />
            
            <div className="prose prose-lg max-w-none text-midnight-800">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  This Privacy Policy complies with the provisions of the Information Technology Act, 2000 ("Act") and the Information Technology ("Reasonable security practices, procedures and sensitive personal data or information) Rules, 2011 ("Rules") that require the publication of the Policy for the collection, use, storage, and transfer of sensitive personal data or information.
                </p>
                <p>
                  Kootfin Technologies Private Limited, a private limited company, referred to as "Company," "We," "Us," or "Our," owns and operates the website "www.splytpay.in" and/or the mobile application and SDKs, 'Splytpay,' (collectively referred to as the "Platform").
                </p>
                <p>
                  "You" and "Your" shall mean anyone who visits, accesses, or uses our Platform or obtains Services from Us through our Platform.
                </p>
                <p>
                  We are committed to protecting Your privacy and the information that You share while using and operating the Platform. We value the trust You place in Us and thus maintain the highest security standards for securing the transactions and Your information.
                </p>
                <p>
                  We may also allow Our group companies, affiliates, and subsidiary companies to use Our Platform to offer their products and services to You under applicable terms and conditions specified on Our Platform from time to time.
                </p>
                <p>
                  This Privacy Policy specifies the manner in which personal data and other information are collected, received, stored, processed, disclosed, transferred, dealt with, or otherwise handled by the Company. The information received from You while accessing the Services through the website, mobile app, or customer service will be utilized as set out in this Policy. This Privacy Policy does not apply to information that You provide to or that is collected by any third party (excluding the group companies, affiliates, and subsidiary companies) through the Platform or any Third-Party Sites that You access or use in connection with the services offered on the Platform.
                </p>
                <p>
                  Please read the Privacy Policy carefully before using or registering on the Platform or accessing/availing the services made available on the Platform.
                </p>
                <p>
                  By visiting the Platform, You ("You" or "Your") accept and agree to be bound by the terms and conditions of this Privacy Policy ("Privacy Policy"). This Privacy Policy is incorporated into and subject to the Terms of Use of the Platform ("Terms") and shall be read harmoniously and in conjunction with the Terms. We reserve the right to update or modify this Privacy Policy at any time without prior notice, and such changes shall be effective immediately.
                </p>
                <p>
                  We wish to mention that in case of non-compliance with the privacy policy pertaining to access or usage of the computer resource, We shall have the right to terminate Your access or Your usage rights to the computer resource immediately or remove non-compliant information or both, as the case may be.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Data we collect about you</h2>
                <p>
                  We collect, transmit, and store personal data about you on our secured servers after obtaining your consent, to provide you with, or in connection with, the Services. Please note that we only collect and process a minimal amount of your personal data to provide you with the Services.
                </p>
                <p>The information collected on the platform includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Identity and profile-related data:</strong> This includes your first and last name, parent's name, spouse's name, date of birth, gender, live photo/video, educational qualifications, purpose of loan, address, employment status, company name, contact information (including addresses, email IDs, and phone numbers), and marital status.
                  </li>
                  <li>
                    <strong>KYC/KRA data:</strong> This includes identification details such as the last 4 digits of Aadhaar, PAN number, signature, and documents for identity/address proofs such as Aadhaar, PAN, passport details, Voter ID, driving license, and/or education details.
                  </li>
                  <li>
                    <strong>Financial savings data:</strong> This includes your investment in financial assets, shares, mutual funds, bonds, and insurance.
                  </li>
                  <li>
                    <strong>Financial data:</strong> This includes your past credit history, income details, details of loans issued or otherwise applied for through the Platform, payments, and repayments thereof, bank account details, and bank account statements.
                  </li>
                  <li>
                    <strong>Device data:</strong> This includes your IP addresses, browser types and versions, cookies, time zone settings, operating systems, and device information. We collect, transmit, and store such data on our secured server.
                  </li>
                  <li>
                    <strong>App data:</strong> We collect, transmit, and store the installed application's information on our secured servers. We only use the package name of each installed application to assess creditworthiness and provide customized loan offers.
                  </li>
                  <li>
                    <strong>Transaction data:</strong> This includes details of transactions that may occur through the Platform or in connection with the Services. For example, transaction data may include the services you have sought or availed through the Platform or confirmations of such services.
                  </li>
                </ul>
                <p>
                  We are required to collect your personal data to provide you with access to the Platform and Services. In certain cases, we are required to collect personal data as required by law or under the Terms. If you fail to provide us that data as and when requested by us, we will not be able to perform our obligations under the arrangement we have with you or are trying to enter into with you (for example, to provide you with features of the Services). In this case, we may have to cancel or limit your access to the Services (or part thereof).
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How we collect data about you</h2>
                <p>
                  We use different methods to collect and process personal data about you. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Information you provide us:</strong> This is the information (including identity, contact, KYC, financial, and device data) you consent to give us when you use our Services or correspond with us (for example, by email or chat, or through the Platform). It includes information you provide when you register to use the Services, use a Platform feature, share data through the Platform, or when you report a problem with the Platform and our Services. If you contact us, we will keep a record of the information shared during the correspondence.
                  </li>
                  <li>
                    <strong>Information we collect about you and your device:</strong> Each time you visit the Platform or use the Services, we will automatically collect personal data through the use of tools like cookies.
                  </li>
                  <li>
                    <strong>Information we receive from other sources including third parties and publicly available sources:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        We or the Financing Partner may also work closely with third parties (including, for example, Insurance companies, Mutual Funds RTAs, Demat Depositories, credit information bureaus, account aggregators, business partners, technical sub-contractors, analytics providers, search information providers, etc.) and may lawfully receive information about You from such sources. Such data may be combined with data collected on the Portal and such other information as provided in this Policy.
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. How we use your personal data & for what purpose</h2>
                <p>
                  We will only use your personal data in accordance with the applicable law. Most commonly, we will use your personal data to provide you with the Services, or where we need to comply with a legal obligation.
                </p>
                <p>
                  You agree and acknowledge that by using our Services and creating an account on the Platform, you authorize us, our associate partners, and affiliates to contact you via email, phone, or otherwise. This is to ensure that you are aware of all the features of the Services.
                </p>
                <p>
                  In general, we use your personal data for the following purposes and activities undertaken without direct human supervision or control:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To register you as a user of the Platform;</li>
                  <li>To provide you with the Services;</li>
                  <li>To facilitate your application to avail loan and otherwise in connection with your obtaining of credit facilities from regulated entities including our lending partners</li>
                  <li>To manage our relationship with you, including notifying you of changes to any Services;</li>
                  <li>To administer and protect our business and the Platform, including troubleshooting, data analysis, system testing, and performing internal operations;</li>
                  <li>To deliver content to you;</li>
                  <li>To send you communication, including through WhatsApp business messages, in relation to your use of the Platform or Services;</li>
                  <li>To monitor trends so we can improve the Platform and Services;</li>
                  <li>To improve our business and delivery models;</li>
                  <li>To perform our obligations that arise out of the arrangement we are about to enter or have entered with you;</li>
                  <li>To enforce our Terms;</li>
                  <li>To undertake marketing services, including sending you promotional messages;</li>
                  <li>To respond to court orders, establish or exercise our legal rights, or defend ourselves against legal claims;</li>
                  <li>In compliance with the Reserve Bank of India's norms, to contact you or locate you in case of any default; and</li>
                  <li>To ensure compliance with applicable laws.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. How we store and retain data about you</h2>
                <p>
                  We shall retain/store user's Information in India if it is required to provide services or as long as it is required for business purpose. Retention of information will be as per applicable law/ regulatory requirements in India.
                </p>
                <p>
                  We may retain the following kinds of information (not exhaustive):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All necessary records of transactions of users, both domestic and international: 5 years from the date of transaction.</li>
                </ul>
                <p>
                  Information may be retained for an extended period in the following cases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>in case of requirement of any investigations under law or as part of any requirement before Courts/Tribunals/Forums/Commissions etc. and</li>
                  <li>to enhance/ improvise the products/ services of Kootfin Technologies Private Limited</li>
                </ul>
                <p>
                  We ensure that access to user data is sufficiently restricted using access controls and industry standard encryption algorithms. Further, we have in place a robust incident management system along with a proactive incident response posture.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. How we share your personal data</h2>
                <p>
                  You agree and acknowledge that any and all information pertaining to you, whether or not you directly provide it to us (via the Services or otherwise), including but not limited to personal correspondence such as emails, instructions from you, etc., may be collected, compiled, and shared by us with third parties after obtaining your explicit consent, solely in order to render the Services to you (that is, in connection with loan applications and your loan journey). This may include but not be limited to Lending Partners (as defined in the Terms), storage providers, data analytics providers, consultants, lawyers, and auditors. We may also share this information with our group & affiliate companies with the above mentioned purposes. If you fail to provide consent for sharing of such data when requested by us, we may not be able to perform our obligations under the arrangement we have with you or are trying to enter into with you. In this case, we may not be able to provide the Services to you.
                </p>
                <p>
                  You agree and acknowledge that by using our Services and creating an account on the Platform, you authorize us, our associate partners, and affiliates to contact you via email, phone, or otherwise. This is to ensure that you are aware of all the features of the Services.
                </p>
                <p>
                  You agree and acknowledge that we may share data where we are required by law, any court, a government agency, or authority to disclose such information. Such disclosures are made in good faith and belief that it is reasonably necessary to do so for enforcing this Policy or the Terms, or in order to comply with any applicable laws and regulations.
                </p>
                <p>
                  We and Our group companies, affiliates and subsidiary companies (to the extent Personal Information is collected by them) may, in compliance with applicable laws, share/transfer/assign all of Your Personal Information and other information with any other business entity(ies), in the event of a merger, sale, re-organization, amalgamation, joint ventures, assignment, restructuring of business or transfer or disposition of all or any portion of Our business.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Accessing and updating your personal data</h2>
                <p>
                  You hereby warrant that all personal data that you provide us with is accurate, up-to-date, and true. When you use our Services, we make best efforts to provide you with the ability to review and correct inaccurate or deficient data, subject to any legal requirements. We shall verify the accuracy of the new personal data you provided to us.
                </p>
                <p>
                  At any point of time You can choose to edit/modify or delete/withdraw any Personal Information shared for use of the Platform. Please note that deleting or withdrawing information may affect the Services we provide to you. You can edit/modify or delete Your information by writing to support@splytpay.in.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
                <p>
                  Our Platform has reasonable security measures and safeguards in place to protect Your privacy and Personal Information from loss, misuse, unauthorized access, disclosure, destruction, and alteration of the information in compliance with applicable laws. Further, whenever You access Your account on the Platform or any information relating to it, We offer the use of a secure server. We cannot however ensure or warrant the security of any information. You transmit to the Company or guarantee that Your Personal Information and/or other Non-Personal Information provided for availing the Services or accessing the Platform will not be accessed, disclosed, altered or destroyed by a breach of any of Our security measures and safeguards. It is further clarified that You have, so long as You access and/or use the Platform (directly or indirectly), the obligation to ensure that You shall at all times, take adequate physical, managerial, and technical safeguards, at Your end, to preserve the integrity and security of Your data which shall include and not be limited to Your Personal Information.
                </p>
                <p>
                  When payment information is being transmitted on or through the Platform, it will be protected by encryption technology. You expressly consent to the sharing of Your information with third party service providers, including payment gateways, to process payments and manage your payment related information. We take various steps and measures to protect the security of your information from misuse, loss, unauthorized access, modification or disclosure. We use the latest secure server layers encryption and access control on our systems. Please do not share your Account's login, password and OTP details with anybody.
                </p>
                <p>
                  While We observe reasonable security measures to protect Your Personal Information on all our digital platforms, security risks may still arise for reasons outside of our control such as hacking, virus dissemination, force majeure events, breach of firewall etc. Please note that the above mentioned measures do not guarantee absolute protection to the Personal Information. The Company assumes no liability or responsibility for disclosure of Your information due to errors in transmission, unauthorized third-party access, or other causes beyond its control. You play an important role in keeping Your personal information secure. You shall not share Your Personal Information or other security information for Your account with anyone. The Company has undertaken reasonable measures to protect Your rights of privacy with respect to Your usage of the Platform controlled by Us and Our Services. However, We shall not be liable for any unauthorized or unlawful disclosures of Your personal information made by any third parties who are not subject to Our control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Third party websites</h2>
                <p>
                  Our Platform may link You to other third – party Platforms ("Third – Party Sites") that may collect Your Personal Information including Your IP address, browser specification, or operating system. The Company is not in any manner responsible for the security of such information or their privacy practices or content of those Third – Party Sites. Additionally, You may also encounter "cookies" or other similar devices on certain pages of the Third – Party Sites and it is hereby clarified by the Company that the Platform does not control the use of cookies by these Third – Party Sites. These third-party service providers and Third-Party Sites may have their own privacy policies governing the storage and retention of Your information that You may be subject to. This Privacy Policy does not govern any information provided to, stored on, or used by these third-party providers and Third-Party Sites. We recommend that when You enter a Third-Party Site, You review the Third Party Site's privacy policy as it relates to safeguarding of Your information. We use third-party advertising companies to serve ads when You visit the Platform. These companies may use information (not including Your name, address, email address, or telephone number) about Your visits to the Platform and Third-Party Sites in order to provide advertisements about goods and services of interest to You. You agree and acknowledge that We are not liable for the information published in search results or by any Third Party Sites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Cookies</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cookies are small data files that are stored on your device. We use cookies and other tracking technologies to distinguish you from other users of the Services and to remember your preferences. This helps us provide you with a good experience when you use our Services and also allows us to improve the Services.</li>
                  <li>We receive and store Non – Personal Information, by the use of data collection devices such as "cookies" on certain pages of the Platform, in order to help and analyze Our web – page flow, track user trends, measure promotional effectiveness, and promote trust and safety. We offer certain additional features on the Platform that are only available through the use of a "cookie". We place both permanent and temporary cookies in Your computer's hard drive.</li>
                  <li>We also use cookies to allow You to enter Your password less frequently during a session on the Platform. Most cookies are "session cookies," meaning that they are automatically deleted from Your hard drive at the end of a session. You are always free to decline Our cookies if Your browser permits, although in that case, You may not be able to use certain features or Services being provided on the Platform or You may be required to re-enter Your password each time you log – in or access the Platform during a session. No Personal Data will be collected via cookies and other tracking technology; however, if you previously provided Personal Data, cookies may be tied to such information.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Your consent to Privacy Policy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>By visiting the Platform or setting up/creating an account on the Platform for availing the Services on the Platform at such time, You signify Your acceptance to the provisions of the Privacy Policy.</li>
                  <li>You may choose to withdraw Your consent provided hereunder at any point in time. Such withdrawal of consent must be sent in writing to support@splytpay.in. In case You do not provide Your consent or later withdraw Your consent, We request you not to access the Platform and/or use the Services and also reserve the right to not provide You any Services through the Platform. In such a scenario, the Company may delete Your information (Personal or otherwise) or de-identify it so that it is anonymous and not attributable to You.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. Changes to Privacy Policy</h2>
                <p>
                  We reserve the unconditional right to change, modify, add, or remove portions of this Privacy Policy at any time, without specifically notifying You of such changes. However, We may, at Our sole discretion, provide You push notifications or such other form(s) of notice as We deem necessary to keep You updated about this Privacy Policy. Any changes or updates will be effective immediately. You should review this Privacy Policy regularly for changes. Your continued usage of the Platform shall signify Your consent to such changes and agreement to be legally bound by the same.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">13. Governing Law & Jurisdiction</h2>
                <p>
                  This policy will be governed by and construed in accordance with the laws of India and subjected to the exclusive jurisdiction of Courts of Bangalore.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">14. Grievance Officer</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Splytpay aims to provide the best customer service through its Platform. We value customer-relationship and strive to offer an efficient and robust grievance redressal mechanism.</li>
                  <li>If you have any questions or concerns regarding the Platform, please feel free to contact us.</li>
                  <li><strong>Customer Service Team (Level 1):</strong> You can reach us for any query/complaint by writing to us at support@splytpay.in</li>
                  <li><strong>Grievance Team (Level 2):</strong> If the Complaint/Grievance is not redressed by the Customer Service Centre within 7 working days, the customer shall approach the Digital Lending Grievance Redressal Officer (GRO) of the Company at below details:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Name: Mr. Shubham Banerjee</li>
                      <li>Email: grievance@splytpay.in</li>
                    </ul>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
