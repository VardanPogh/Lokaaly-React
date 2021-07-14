import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import NavBar from "../NavBar";
import Footer1 from "../Footer";
import {Container} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    header: {
        fontWeight: 'bold',
        margin: '20px 0'
    },
    infoDiv: {
        margin: '45px 0',
        textAlign: "left",
    }
}));

export default function Privacy() {
    const classes = useStyles();

    return (
        <>
            <NavBar/>
            <Container maxWidth="lg">
                <div className={classes.infoDiv}>
                    <p className={classes.header}>PRIVACY POLICY</p>

                    <p> UPDATED 12 MAY 2021</p>
                    We are committed to protecting the privacy of all visitors to www.lokaaly.com (the "Website").
                    Please
                    read
                    the following privacy policy, which explains how we use and protect your information.
                    The website at http://www.lokaaly.com (our "Website") and Lokaaly (our "Mobile App") is owned and
                    operated
                    by Lokaaly FZC. Our head office is at Sharjah Publishing City Free zone Business Center, Sharjah,
                    United
                    Arab Emirates. You can contact us by email at support@lokaaly.com in relation to any matters
                    pertaining
                    to
                    this Privacy Policy.
                    This privacy policy applies only to the Website/App of Lokaaly.com and does not extend to the
                    websites
                    of
                    any other companies or organizations (including Home chefs/restaurants or other business) to which
                    we
                    link,
                    and specifically addresses our obligations in respect of applicable laws in the United Arab Emirates
                    ("UAE"). In this Privacy Policy, references to "we", "us" or "our" means Lokaaly FZC. References to
                    "you"
                    and "your" are to users of our Website. By visiting and/or ordering services on this Website, you
                    agree
                    and
                    where required you consent to the collection, use and transfer of your information as set out in
                    this
                    policy.

                    <p className={classes.header}> 1. INFORMATION THAT WE COLLECT FROM YOU</p>

                    When you visit www.Lokaaly.com or make an order through the website or mobile app, you may be asked
                    to
                    provide information about yourself including your full name, password and contact details like phone
                    number,
                    email address and delivery address - personal and business address. You may optionally provide us
                    with
                    this
                    information through any third-party sign-in services such as Facebook and Google Plus. In such
                    cases, we
                    fetch and store whatever information is made available to us by you through these sign-in services.
                    We
                    collect this information directly from you when you provide it to us; and/or automatically as you
                    navigate
                    through our website/mobile app and this may include usage details, IP addresses and information
                    collected
                    through cookies.
                    We may collect your geographic location (country/territory where you are living and/or working); We
                    may
                    also
                    collect information about your usage of the website and information about you from the messages you
                    post
                    to
                    the website and the e-mails or letters you send to us. We may collect other information like your
                    preferences like language settings, reviews, ratings, your order details, bookmarks, favorite
                    restaurants;
                    credit card details your order history, your special instructions, your special request, your
                    searches
                    like
                    the terms and restaurants you have searched on the website or app.
                    We may collect your browsing information like how long you have used our website/app, the ads you
                    have
                    clicked, food imaged you have clicked, restaurant menus you have searched. We may collection
                    information
                    from you through our social media channels like Facebook, Instagram, Twitter, Google, LinkedIn,
                    Google
                    Plus
                    profile. We may collect information through emailers, newsletters, push notification, app
                    notification,
                    polls. If you place online orders through our website/app, we may collect and store information
                    about
                    you
                    for future transactions, including your phone number, address, email id, billing details and card
                    information. This information may be shared with third-parties which assist in processing and
                    fulfilling
                    your requests and your card details are stored in an encrypted format.
                    On placing order from any home chef/restaurant on our website/app, we may publicly display
                    information
                    that
                    you have placed orders with that restaurant. Kindly be aware that no security measures may be the
                    ideal
                    or
                    adequate to prevent and we cannot control the action of other users using our website/app.
                    Unfortunately,
                    the transmission of information via the internet is not completely secure. Although we will take
                    steps
                    to
                    protect your information, we cannot guarantee the security of your data transmitted to the
                    website/app.
                    Any
                    transmission is at your own risk. Once we have received your information, we will use our security
                    features
                    to try to prevent unauthorized access. Hence, we do not guarantee or provide any kind of assurance
                    about
                    your usage on our website/app. We may share any kind of your information with other businesses or
                    third
                    parties and we may share your information to other personnel's including our staff, home
                    chef/restaurant
                    partners, delivery companies, restaurant staffs, drivers and to any other parties involved in the
                    delivery
                    of your order, and the analysis and support of your use of the website. We may share your
                    information
                    with
                    other companies and organizations for fraud protection and credit risk protection. If our business
                    enters
                    into a joint venture with, purchases or is sold to or merged with another business entity, your
                    information
                    may be disclosed or transferred to the target company, our new business partners or owners or their
                    advisors. We may share information with other third parties including marketing and advertising
                    companies,
                    our affiliates and associates, to contact you occasionally about services that may be of interest to
                    you.
                    They may contact you by telephone, SMS or by e-mail. You may let us know about your preference by
                    sending
                    email to support@Lokaaly.com

                    <p className={classes.header}> 2. USE OF YOUR INFORMATION</p>

                    <p>2.1 Your information will enable us to provide you with access to the relevant parts of the
                        Website
                        and
                        to
                        supply the services you have requested. It will also enable us to bill you and to contact you
                        where
                        necessary concerning our services. We will also use and analyze the information we collect so
                        that
                        we
                        can
                        administer, support, improve and develop our business and for any other statistical or
                        analytical
                        purpose.</p>
                    <p> 2.2 We may use your information to contact you for your views on our services and to notify you
                        occasionally
                        about important changes or developments to the Website or our services.
                    </p> <p> 2.3 You agree that we may use your information to let you know about our other products and
                    services
                    that
                    may be of interest to you including services that may be the subject of direct marketing and we may
                    contact
                    you to do so by post, telephone, mobile messaging (e.g. SMS, WhatsApp etc.) as well as by e-mail.
                </p> <p> 2.4 You agree that we may also share information with third parties (including those in the
                    food,
                    drink,
                    leisure, marketing, advertising sectors, government or any other parties) to use your information in
                    order
                    to let you know about goods and services which may be of interest to you (by post, telephone, mobile
                    messaging (e.g. SMS, WhatsApp etc.) and/or e-mail) and to help us analyze the information we collect
                    so
                    that
                    we can administer, support, improve and develop our business and services to you.
                </p> <p> 2.5 If you do not want us to use your data in this way or change your mind about being
                    contacted in
                    the
                    future, please let us know by sending email to support@Lokaaly.com or send us your message at
                    contact us
                    page.
                </p>
                    <p> 2.6 Please note that by submitting comments and feedback regarding the Website and the
                        services, you
                        consent
                        to us to use such comments and feedback on the Website and in any marketing or advertising
                        materials. We
                        will only identify you for this purpose by your first name and the region in which you reside.

                    </p>
                    <p className={classes.header}> 3. DISCLOSURE OF YOUR INFORMATION</p>
                    <p> 3.1 The information you provide to us will be transferred to and stored on our servers and may
                        be
                        accessed
                        by or given to our staff working outside UAE and third parties including companies within our
                        company
                        (which
                        means our subsidiaries, our ultimate holding company and its subsidiaries) who act for us for
                        the
                        purposes
                        set out in this policy or for other purposes notified to you from time to time in this policy.
                        However,
                        we
                        will always take steps to ensure that your information is treated in accordance with this
                        policy.
                    </p> <p> 3.2 Those third parties that process information such as process credit card payments and
                    provide
                    support
                    services for us. In addition, we may need to provide your information to any home
                    chefs/restaurants
                    that
                    you
                    have placed your order with. By submitting your personal data, you agree to this transfer,
                    storing
                    or
                    processing. Lokaaly.com will take all steps reasonably necessary to ensure that your data is
                    treated
                    securely and in accordance with this privacy policy.
                </p> <p> 3.3 If you have consented we may allow carefully selected third parties, including marketing
                    and
                    advertising
                    companies, our affiliates and associates, to contact you occasionally about services that may be
                    of
                    interest
                    to you. They may contact you by telephone, SMS as well as by e-mail. If you change your mind
                    about
                    being
                    contacted by these companies in the future, please let us know by using the contact details set
                    out
                    in
                    section 8 below and/or by amending your profile accordingly.
                </p> <p> 3.4 If our business enters into a joint venture with, purchases or is sold to or merged with
                    another
                    business entity, your information may be disclosed or transferred to the target company, our new
                    business
                    partners or owners or their advisors.
                </p> <p> 3.5 We may use the information that you provide to us if we are under a duty to disclose or
                    share
                    your
                    information in order to comply with (and/or where we believe we are under a duty to comply with)
                    any
                    legal
                    obligation; or in order to enforce our Website Terms and any other agreement; or to protect the
                    rights
                    of
                    Lokaaly.com, Home Chefs/Restaurants tied with us. This includes exchanging information with
                    other
                    companies
                    and other organizations for the purposes of fraud protection and prevention.
                </p> <p> 3.6 We share your Personal Information with our third-party service providers based both inside
                    and
                    outside
                    of the European Economic Area ("EEA") and the United Arab Emirates ("UAE") who we engage to
                    provide
                    support
                    services in relation to our Website for the purposes of: hosting and maintaining our Website;
                    providing
                    data
                    storage; assisting us with database management, and in order to assist us with related tasks or
                    processes.
                    All of our service providers are bound by written contracts to process personal data provided to
                    them
                    only
                    for the purpose of providing the specific service to us and to maintain appropriate security
                    measures to
                    protect your Personal Information.
                </p>
                    <p> 3.7 Our Website provide sharing buttons that you can click on in order to share content from our
                        Website
                        on
                        social media channels, e.g., Facebook, Twitter, Instagram, YouTube, Linkedin, Snapchat, Google
                        Plus
                        etc.
                        We
                        do not use these buttons to share your Personal Information with social media providers. When
                        you
                        click
                        on a
                        sharing button the relevant social media provider will gather personal Information directly from
                        you.
                        Please
                        read the privacy policy of any social media provider with which you intend to share content
                        before
                        clicking
                        on the corresponding sharing button.

                        <p className={classes.header}> 4. COOKIES</p>

                        Cookies are small amounts of information which we store on your computer. Unless you have told
                        us
                        you
                        object, our system will issue cookies to your computer when you use the Website (whether you are
                        a
                        registered or non-registered user). Cookies make it easier for you to log on to and use the
                        Website
                        during
                        future visits. They also allow us to monitor website traffic and to personalize the content of
                        the
                        site
                        for
                        you. You may refuse to accept cookies by activating the setting on your browser which allows you
                        to
                        refuse
                        the setting of cookies. However, if you do that, you may not be able to use some features on the
                        Website.
                        Unless you have adjusted your browser setting so that it will refuse cookies, our system will
                        issue
                        cookies
                        when you log on to our site. Please note that our advertisers may also use cookies, over which
                        we
                        have
                        no
                        control. Hence, you can accept or decline cookies by modifying the settings in your browser.
                        Please
                        bear
                        in
                        mind however, that you may not be able to use all the features of our site if cookies are
                        disabled.
                        Your browser also generates other information, including which language the site is displayed
                        in,
                        and
                        your
                        IP address. An IP address is a set of numbers which is assigned to your computer during a
                        browsing
                        session
                        whenever you log on to the Internet via your internet service provider or your network (if you
                        access
                        the
                        Internet from, for example, a computer at work). Your IP address is automatically logged by our
                        servers
                        and
                        used to collect traffic data about visitors to our websites. We do not use your IP address to
                        identify
                        you
                        personally.
                        Lokaaly uses analytic services to understand how effective Lokaaly content is, what interests
                        its
                        users
                        have, and to improve how this website works. In addition, Lokaaly may use other technologies to
                        count
                        visitor numbers and use cookies to track how many individual users access this website and how
                        often
                        they
                        use Lokaaly. Further, Lokaaly FZC may modify or amend this Cookie Policy from time to time at
                        its
                        discretion. Lokaaly encourages you to periodically review this Cookie Policy to be informed
                        about
                        how it
                        is
                        using cookies.
                    </p>
                    <p className={classes.header}> 5. SECURITY AND DATA RETENTION</p>

                    <p> 5.1 We take steps to protect your information from unauthorized access and against unlawful
                        processing,
                        accidental loss, destruction and damage. We will keep your information for a reasonable period
                        or as
                        long as
                        required.
                    </p> <p> 5.2 Where you have chosen a password which allows you to access certain parts of the
                    Website,
                    you
                    are
                    responsible for keeping this password confidential. We advise you not to share your password
                    with
                    anyone.
                </p> <p> 5.3 Unfortunately, the transmission of information via the internet is not completely secure.
                    Although
                    we
                    will take steps to protect your information, we cannot guarantee the security of your data
                    transmitted
                    to
                    the Website; any transmission is at your own risk. Once we have received your information, we
                    will
                    use
                    strict procedures and security features to try to prevent unauthorized access.
                </p> <p> 5.4 All credit/debit cards details and personally identifiable information will NOT be stored,
                    sold,
                    shared,
                    rented or leased to any third parties
                </p> <p> 5.5 https://www.Lokaaly.com/ will not pass any debit/credit card details to third parties
                </p> <p> 5.6 https://www.Lokaaly.com/ takes appropriate steps to ensure data privacy and security
                    including
                    through
                    various hardware and software methodologies. However, (https://www.Lokaaly.com/) cannot
                    guarantee
                    the
                    security of any information that is disclosed online
                </p>
                    <p className={classes.header}> 6. ACCESSING AND UPDATING</p>

                    You have the right to see the information we hold about you ("Access Request") and to ask us to
                    make
                    any
                    changes to ensure that it is accurate and up to date. If you wish to do this, please contact us
                    using
                    the
                    contact details set out in contact us page. In the event that you make an Access Request, we
                    reserve
                    the
                    right to charge a fee of AED1000.00 to meet our costs in providing you with details of the
                    information
                    we
                    hold about you.

                    <p className={classes.header}> 7. CHANGES TO OUR PRIVACY POLICY</p>
                    The Website Policies and Terms & Conditions may be changed or updated occasionally to meet the
                    requirements
                    and standards. Therefore, the customers are encouraged to frequently visit these sections in
                    order
                    to be
                    updated about the changes on the website. Modifications will be effective on the day they are
                    posted

                    <p className={classes.header}> 8. REFUND POLICY</p>
                    The food will be delivered by the home chef/restaurant and any payment you made by cash or
                    credit
                    card
                    will
                    be refundable depending upon receiving confirmation from the home chef/restaurant.
                    You have the right to cancel an order within 3 minutes from placing the order on our website by
                    calling
                    us
                    or at support@Lokaaly.com. While every effort is made to ensure that accurate pricing and
                    descriptions
                    are
                    maintained, we reserve the right to cancel any order that is based on inaccurate information. An
                    order
                    may
                    be subsequently cancelled by a home chef/restaurant after you have received a confirmation that
                    it
                    has
                    been
                    sent to the home chef/restaurant. Lokaaly.com and our partner home chefs/restaurants reserve the
                    right
                    to
                    cancel any order, before or after acceptance, and may not notify you immediately of any such
                    cancellation.
                    On non-availability of food or driver or delivery or delivery due to any reason and if you have
                    placed
                    online order on Lokaaly.com by credit card, Lokaaly.com will refund the money within 7-14
                    working
                    days.
                    Lokaaly.com will not be responsible for any kind of complaints received from you after
                    delivering
                    the
                    food
                    to your address including delay, food quality, food quantity, food poisoning or any other
                    complaints.
                    Refund
                    will be done upon the confirmation from the appropriate home chef/restaurant that delivered food
                    to
                    you.

                    <p className={classes.header}> 9. CONTACT</p>

                    All comments, queries and requests relating to our use of your information are welcomed and
                    should
                    be
                    emailed to support@Lokaaly.com or send us a message in the contact us page.
                    Office Address:
                    Business Center
                    Sharjah Publishing City Free zone, Sharjah, UAE.
                    Mobile:+971 56 267 0488
                    Email: support@Lokaaly.com
                </div>
            </Container>
            <Footer1/>
        </>
    );
}
