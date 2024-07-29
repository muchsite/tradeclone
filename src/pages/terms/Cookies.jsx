import React, { useEffect } from "react";
import "./h.scss";
const Cookies = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="terms_container">
      <h1>Cookies Policy for TradeFlair Corporate Services Pvt Ltd</h1>

      <h2>Introduction</h2>
      <p>
        TradeFlair Corporate Services Pvt Ltd ("we," "our," "us") uses cookies
        and similar tracking technologies on our website{" "}
        <a href="http://www.tradeflaircorporate.com">
          www.tradeflaircorporate.com
        </a>
        . This Cookies Policy explains what cookies are, how we use them, and
        your choices regarding cookies. By using our website, you consent to the
        use of cookies in accordance with this policy.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your computer or mobile
        device when you visit a website. Cookies are widely used by website
        owners to make their websites work more efficiently, as well as to
        provide reporting information.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience, provide
        functionality, and analyze our website's performance. The types of
        cookies we use include:
      </p>
      <ol>
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for
          the website to function correctly. They enable you to navigate our
          site and use its features.
        </li>
        <li>
          <strong>Performance and Analytics Cookies:</strong> These cookies
          collect information about how you use our website, such as which pages
          you visit and if you experience any errors. This helps us improve the
          performance and functionality of our site.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> These cookies allow our
          website to remember the choices you make, such as your username,
          language, or the region you are in. This provides a more personalized
          experience.
        </li>
        <li>
          <strong>Advertising and Targeting Cookies:</strong> These cookies are
          used to deliver advertisements relevant to you. They also limit the
          number of times you see an advertisement and help measure the
          effectiveness of advertising campaigns.
        </li>
      </ol>

      <h2>Cookies We Use</h2>
      <p>
        Below is a list of the cookies we use on our website and their purpose:
      </p>
      <ul>
        <li>
          <strong>Session Cookies:</strong> Temporary cookies that remain in
          your browser until you leave our website.
        </li>
        <li>
          <strong>Persistent Cookies:</strong> These cookies remain on your
          device for a set period or until you delete them.
        </li>
        <li>
          <strong>Third-Party Cookies:</strong> Cookies set by third-party
          services we use, such as analytics and advertising partners.
        </li>
      </ul>

      <h2>Your Choices Regarding Cookies</h2>
      <p>
        You have the right to choose whether or not to accept cookies. However,
        please note that if you choose to refuse cookies, you may not be able to
        use the full functionality of our website. You can manage your cookie
        preferences by:
      </p>
      <ol>
        <li>
          <strong>Browser Settings:</strong> Most web browsers allow you to
          control cookies through their settings. You can set your browser to
          block or alert you about cookies. To learn more about how to manage
          cookies in your browser, refer to the help documentation provided by
          your browser.
        </li>
        <li>
          <strong>Opt-Out Tools:</strong> You can opt out of tracking by certain
          third-party cookies through industry opt-out programs such as the
          Network Advertising Initiative (NAI) or the Digital Advertising
          Alliance (DAA).
        </li>
      </ol>

      <h2>Changes to This Cookies Policy</h2>
      <p>
        We may update this Cookies Policy from time to time. We will notify you
        of any changes by posting the new Cookies Policy on our website and
        updating the effective date. Your continued use of our website after
        such changes constitutes your acceptance of the new Cookies Policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms, please contact
        us at:
      </p>
      <p>
        TradeFlair Corporate Services Pvt Ltd Email:
        Trade@tradeflaircorporate.com
      </p>
      <p>Phone: +91-9453703128 </p>
      <p>Address: G-31, Block G, Sector 3, Noida, 201301</p>
    </div>
  );
};

export default Cookies;
