import React, { useEffect } from "react";
import "./h.scss";
const Disc = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="terms_container">
      <h1>Disclaimer for TradeFlair Corporate Services Pvt Ltd</h1>

      <h2>Introduction</h2>
      <p>
        The information provided by TradeFlair Corporate Services Pvt Ltd ("we,"
        "our," "us") on our website{" "}
        <a href="http://www.tradeflaircorporate.com">
          www.tradeflaircorporate.com
        </a>{" "}
        is for general informational purposes only. All information on the site
        is provided in good faith; however, we make no representation or
        warranty of any kind, express or implied, regarding the accuracy,
        adequacy, validity, reliability, availability, or completeness of any
        information on the site.
      </p>

      <h2>Professional Advice</h2>
      <p>
        The information provided on our website does not constitute professional
        or financial advice and should not be relied upon as such. Before taking
        any action based on such information, we encourage you to consult with
        our expert team of TradeFlair.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Under no circumstance shall we have any liability to you for any loss or
        damage of any kind incurred as a result of the use of the site or
        reliance on any information provided on the site. Your use of the site
        and your reliance on any information on the site is solely at your own
        risk.
      </p>

      <h2>External Links Disclaimer</h2>
      <p>
        Our website may contain links to other websites or content belonging to
        or originating from third parties or links to websites and features in
        banners or other advertising. Such external links are not investigated,
        monitored, or checked for accuracy, adequacy, validity, reliability,
        availability, or completeness by us. We do not warrant, endorse,
        guarantee, or assume responsibility for the accuracy or reliability of
        any information offered by third-party websites linked through the site
        or any website or feature linked in any banner or other advertising. We
        will not be a party to or in any way be responsible for monitoring any
        transaction between you and third-party providers of products or
        services.
      </p>

      <h2>Errors and Omissions</h2>
      <p>
        While we have made every attempt to ensure that the information
        contained on this site has been obtained from reliable sources,
        TradeFlair Corporate Services Pvt Ltd is not responsible for any errors
        or omissions, or for the results obtained from the use of this
        information. All information on this site is provided "as is," with no
        guarantee of completeness, accuracy, timeliness, or of the results
        obtained from the use of this information, and without warranty of any
        kind, express or implied, including, but not limited to warranties of
        performance, merchantability, and fitness for a particular purpose.
      </p>

      <h2>Views Expressed</h2>
      <p>
        Any views or opinions represented on this website belong solely to the
        content creators and do not represent those of people, institutions, or
        organizations that TradeFlair Corporate Services Pvt Ltd may or may not
        be associated with in a professional or personal capacity unless
        explicitly stated. Any views or opinions are not intended to malign any
        religion, ethnic group, club, organization, company, or individual.
      </p>

      <h2>No Responsibility</h2>
      <p>
        The information on our website is provided with the understanding that
        TradeFlair Corporate Services Pvt Ltd is not herein engaged in rendering
        legal, accounting, tax, or other professional advice and services. As
        such, it should not be used as a substitute for consultation with
        professional accounting, tax, legal, or other competent advisors.
      </p>

      <h2>Changes and Amendments</h2>
      <p>
        We reserve the right to modify this Disclaimer at any time, effective
        upon posting of an updated version on the site. When we do, we will
        revise the updated date at the bottom of this page. Continued use of the
        site after any such changes shall constitute your consent to such
        changes.
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

export default Disc;
