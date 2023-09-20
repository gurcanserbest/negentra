import React from 'react'

const data = [
    {
        title: 'Google',
        description: 'Users can allow or block cookies from the "Cookies" tab by clicking the "lock mark" in the address section of their browser'
    },
    {
        title: 'Internet Explorer',
        description: 'Users can manage cookies in the form of "allow" or "do not allow" by clicking the security tab in the "Tools" section in the upper right part of the browser'
    },
    {
        title: 'Mozilla Firefox',
        description: 'Users can manage cookies by clicking the "Options" image after the "open menu" tab in the upper right corner of the browser and using the "Privacy and security" button'
    },
    {
        title: 'Opera',
        description: 'User can manage cookies from the "Cookies" section by selecting "Advanced" in the "Preferences" section of the browser'
    },
    {
        title: 'Safari',
        description: 'Users can manage all cookies from the "Privacy and security" section by selecting the "safari" tab from the "Settings" section of their phones'
    }
]

const CookiePolicy = () => {
  return (
    <div className='text-black mx-5 md:mx-20'>
        <h1 className='pt-40 font-bold text-5xl mb-20'>Cookie Policy</h1>

        <p>
            FERNVAILLE OYUN TEKNOLOJİLERİ ANONİM ŞİRKETİ (referred to as “Fernvaille”) use some digital technologies to improve User’s experiences on https://rushawaygame.com website (“referred to as website”), website’s extension, RushAway app and use as all online/offline context else during all the time visiting. The usage of these Technologies are made in accordance ith Personal Data Protection Law numbered 6698 (“KVKK or Law”) Purpose of hereby policy is to give an information about the processing of personal data by way of cookies. In this text give out which purposes and which kind of cookies may be collected on website and app and how process them.
            FERNVAILLE OYUN TEKNOLOJİLERİ ANONİM ŞİRKETİ can abandon using cookies on its website or on app, change its function or type and add new types of cookies. Fernvaille reserves its right of making changes to the contract clauses unilaterally by prior declaration published on website. All kinds of changes will enter into force after the declaration is published on the website, app or some public media. Last update date is the time given at the end of this text. For more details about the purpose recording of personal data visit: https://rushawaygame.com/privacy-polic  
        </p>

        <h3 className="font-bold">Method of and Legal Reason for Personal Data Collection</h3>

        <p>
            Personal data acquired by cookies is collected only for the Fernvaille’s legitimate interests. Ads by targeting and profiling will be applied only if the user’s direct consent is present. The collected personal data can be also processed for the purposes stated under PDPL Article 5 and 6.
        </p>

        <h3 className="font-bold">To Whom and For Which Purpose Personal Data Can Be Transferred ?</h3>

        <p>
            General Data Protection Regulation (“GDPR”), which is EU’s legislation on personal data protection, grants users the right to learn when, for what reason, why the data is processed and where they are being stored.
            Personal data can be processed within the law numbered 6698 (“PDPL”) too. Personal data can be shared with official public institutions, business partners and suppliers to a limited extent with within the framework of the Law’s related articles is 8 and 9.
        </p>

        <h3 className="font-bold">For Which Reasons Cookies Are Used For?</h3>

        <p>
            FERNVAILLE OYUN TEKNOLOJİLERİ ANONİM ŞİRKETİ uses cookies for various purposes on its website and applications and processes personal data by collecting cookies. The primary cookies used for these purposes and the purposes are;
            To perform the basic functions necessary for the operation of the Website and applications.
            To analyze the Website and the application, improve the performance of website and the application.
            To improve the Website’s and App’s functionality and provide usage easiness.
            To carry out processes of personalization, targeting and advertising. For example, showing the users ads in relation to the pages and products which they viewed.
            To offer a new services via the website and personalize the offering of services in line the choices.
        </p>

        <h3 className="font-bold">1. Compulsory Cookies</h3>

        <p>
            Some cookies are compulsory to collect for the website’s and application’s safety. Authentication cookies are an example of this. This kind of cookies are compulsory and can not abolished by Fernvaille. Compulsory cookies which are stored in phone or computer enables app to remind user’s preferences. Fernvaille can make special offers to visitors through this cookies. This cookies enable Fernvaille to recognize the user’s preferences even when the user leaves website. If this cookies are not erased by you, it will stay on your computer.
        </p>

        <h3 className="font-bold">2. Preferences Cookies</h3>

        <p>
            This cookie provides personalized offering services to User by remembering user’s choices and preferences. Language options can be an example for that. This cookies occur by choices, and can be abolished in cookie settings communication box.
        </p>

        <h3 className="font-bold">3. Social Media Cookies</h3>

        <p>
            Social Media Cookies provide collecting information about the type of using social media. Such as creating private ads or market searching.   
        </p>

        <h3 className="font-bold">4. Performance and Analysis Cookies</h3>

        <p>
            These are known as “Statistics/Analysis Cookies”. This type of cookie analyse performance and how website and app used by the visitors. It helps analyzing visiter numbers, appear pages, visiting times and page scrolling gestures. Thus potential problems can occur beforehand. This cookies depends on choice and can be abolished from cookie settings communication box.
        </p>

        <h3 className="font-bold">5. Targeting or Advertising Cookies</h3>

        <p>
            This cookie is used when cooperating with business partners to advertise and promote on or off the site and used for the purpose of recognizing and profiling users, targeting advertising and marketing activities and customizing the content. These cookies make it possible to track your click and visit history in the domains where they were created, and to match these records between different domains. This cookies depends on choice and can be abolish in cookie settings communication box.
        </p>

        <h3 className="font-bold">How to Control the Use of Cookies?</h3>

        <p>
            The preferences of visitors and users regarding the use of cookies and similar technologies are essential for FERNVAILLE OYUN TEKNOLOJİLERİ ANONİM ŞİRKETİ. However, the use of cookies is necessary for the Context to function. We would also like to remind you that some functions of the Context may not work partially or completely if some cookies are disabled.
            Most Internet browsers are set to accept cookies. You can set your browser to warn you before accepting some cookies or to reject some cookies. However, if you disable the use of cookies in your Internet browser, some features of FERNVAILLE OYUN TEKNOLOJİLERİ ANONİM ŞİRKETİ Internet pages may be difficult to use or these features may not work properly. It is also possible to delete cookies previously saved in your browser. The procedures for deleting cookies may vary depending on the browser you use.
            Visitors have the opportunity to customize their preferences for cookies by changing the browser settings in which they view the Context If the browser in use offers this possibility, it is possible to change the preferences for cookies through the browser settings. Thus, although it may differ according to the possibilities offered by the browser, data owners have the opportunity to prevent the use of cookies, to choose to receive a warning before the use of cookies, or to disable or delete only some cookies. Users can prevent the use of cookies in various ways. As a user, if you want to prevent the use of cookies;
        </p>

        <div className="container mx-auto my-10">
            <table className="min-w-full">
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="border-b">
                    <td className="py-2 px-4">{item.title}</td>
                    <td className="py-2 px-4">{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

       {/* <div className='my-10 text-sm break-all'>
        <div className="flex justify-center bg-[#151515] text-white w-max h-max items-center">
                <p className='border border-red-800 p-2'>Google</p>
                <p className='border border-red-800 p-2'>Users can allow or block cookies from the "Cookies" tab by clicking the "lock mark" in the address section of their browser</p>
            </div>

            <div className="flex justify-center bg-[#151515] text-white w-max h-max items-center">
                <p className='border border-red-800 p-2'>Internet Explorer</p>
                <p className='border border-red-800 p-2'>Users can manage cookies in the form of "allow" or "do not allow" by clicking the security tab in the "Tools" section in the upper right part of the browser</p>
            </div>

            <div className="flex justify-center bg-[#151515] text-white w-max h-max items-center">
                <p className='border border-red-800 p-2'>Mozilla Firefox</p>
                <p className='border border-red-800 p-2'>Users can manage cookies by clicking the "Options" image after the "open menu" tab in the upper right corner of the browser and using the "Privacy and security" button</p>
            </div>

            <div className="flex justify-center bg-[#151515] text-white w-max h-max items-center">
                <p className='border border-red-800 p-2'>Opera</p>
                <p className='border border-red-800 p-2'>User can manage cookies from the "Cookies" section by selecting "Advanced" in the "Preferences" section of the browser</p>
            </div>

            <div className="flex justify-center bg-[#151515] text-white w-max h-max items-center">
                <p className='border border-red-800 p-2'>Safari</p>
                <p className='border border-red-800 p-2'>Users can manage all cookies from the "Privacy and security" section by selecting the "safari" tab from the "Settings" section of their phones</p>
            </div>
       </div> */}

        <p>
            The settings menu of the mobile device can be used to manage cookies on mobile devices . Fernvaille, our third party service providers or partners may also use cookies or other tracking technologies to manage or measure the performance of advertisements displayed on other Internet pages you visit.
            By visting FERNVAILLE OYUN TEKNOLOJİLERİ ANONİM ŞİRKETİ web pages as a registered user or in any other way, users are deemed to have given Fernvaille permission for this, that you know that we monitor their activities and use of services and functions with the technologies mentioned above and similar technologies that may be developed in the future.
            When third parties visit FERNVAILLE OYUN TEKNOLOJİLERİ ANONİM ŞİRKETİ Internet pages, they may set up and access their own tracking technologies. When third parties use Fernvaille Internet pages, they can access information about themselves and their online activities over time and between different Internet pages or applications. Fernvaille cannot control how they use such tracking technologies. And it has its own privacy rules.
        </p>

        <h3 className="font-bold">Visitor’s and User’s Rights</h3>

        <p>
            According to Article 11 of the Personal Data Protection Law, the rights of visitors and users are as follows; <br />

            <ul>
                <li>To learn whether his personal data are processed or not,</li>
                <li>To request information if his personal data are processed</li>
                <li>To learn the purpose of his data processing and whether this data is used for intended purposes,</li>
                <li>To know the third parties to whom his personal data is transferred at home or abroad,</li>
                <li>To request the rectification of the incomplete or inaccurate data, if any,</li>
                <li>To request the erasure or destruction of his personal data under the conditions laid down in KVKK</li>
                <li>To request notification of the operations carried out in compliance with subparagraphs (d) and (e) to third parties to whom his personal data has been transferred,</li>
                <li>To object to the processing, exclusively by automatic means, of his personal data, which leads to an unfavourable consequence for the data subject,</li>
                <li>To request compensation for the damage arising from the unlawful processing of his personal data.</li>
            </ul>

            The application form can be downloaded via https://verbis.kvkk.gov.tr/DataResponsible/Register It is filled in accordance with the request / complaint, the form is transmitted to Nasuh Akar Mahallesi 1407. Sokak No: 4 Balgat / Çankaya / ANKARA via mail or (to Registered Electronic Mail) REM or the form is physically filled by Şirintepe Mah. Maraş Sk. Mert Apt Blok No: 1 İç Kapi No: 2 Tepebaşi / Eskişehir is cargo / mail.
            If the demand is transmitted to Fernvaille using one of the methods shown on the top, according to the 13/2 provision of the Law, applicant's request is evaluated within 30 days of the latest and the applicant is informed about the subject. If applicant's claim is accepted, the necessary operations will be fulfilled by the company immediately.
            Requests are free as a rule, but if the request requires a cost, a fee will be charged by the Company in accordance with the following provision;
            "Application Procedures and Procedures of Application to Data Controller to the Procedures" Article 7; "If the applicant's application is to be answered in writing, it is not charged up to 10 pages. 1 TL process fee can be charged for each page over 10 pages. If the answer to the application is given in a recording medium such as a flash disk, the charge may not exceed the cost of the recording medium to be requested by the Data Controller. 
        </p>

    </div>
  )
}

export default CookiePolicy