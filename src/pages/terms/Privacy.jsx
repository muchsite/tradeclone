import React, { useEffect } from "react";
import "./h.scss";
const Privacy = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="terms_container">
      <h1>Privacy Policy for TradeFlair Corporate Services Pvt Ltd</h1>

      <h2>Use of Information</h2>
      <p>We use the information we collect for various purposes, including:</p>
      <ul>
        <li>
          <strong>Service Provision:</strong> To provide, manage, and enhance
          our import and export finance services.
        </li>
        <li>
          <strong>Transaction Processing:</strong> To process transactions and
          send related information, including transaction confirmations and
          invoices.
        </li>
        <li>
          <strong>Communication:</strong> To communicate with you, respond to
          inquiries, provide updates, and send marketing communications (if you
          have opted in).
        </li>
        <li>
          <strong>Personalization:</strong> To personalize your experience on
          our website and tailor our services to your preferences.
        </li>
        <li>
          <strong>Security and Fraud Prevention:</strong> To protect our
          website, services, and users from security threats and fraudulent
          activities.
        </li>
        <li>
          <strong>Compliance:</strong> To comply with legal obligations and
          regulatory requirements, and to protect our legal rights.
        </li>
        <li>
          <strong>Analytics and Improvement:</strong> To analyze website usage
          and improve our website, services, and user experience.
        </li>
      </ul>

      <h2>Disclosure of Information</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>
          <strong>Financial Institutions:</strong> Banks and financial
          institutions involved in processing your transactions.
        </li>
        <li>
          <strong>Service Providers:</strong> Third-party service providers who
          assist us in operating our website, providing our services, and
          conducting our business activities.
        </li>
        <li>
          <strong>Regulatory Authorities:</strong> Law enforcement officials,
          government agencies, and regulatory bodies when required by law or to
          protect our rights.
        </li>
        <li>
          <strong>Business Partners:</strong> Other companies and organizations
          with whom we collaborate to provide our services, subject to your
          consent where required.
        </li>
        <li>
          <strong>Professional Advisors:</strong> Lawyers, accountants,
          auditors, and other professional advisors who need access to your
          information to provide their services.
        </li>
        <li>
          <strong>Consent-Based Sharing:</strong> Other parties with your
          consent or at your direction.
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement a variety of security measures to maintain the safety of
        your personal information, including:
      </p>
      <ul>
        <li>
          <strong>Encryption:</strong> Encrypting sensitive data during
          transmission and storage.
        </li>
        <li>
          <strong>Access Controls:</strong> Restricting access to personal
          information to authorized personnel only.
        </li>
        <li>
          <strong>Secure Servers:</strong> Storing data on secure servers with
          firewalls and intrusion detection systems.
        </li>
        <li>
          <strong>Regular Audits:</strong> Conducting regular security audits
          and assessments to identify and mitigate vulnerabilities.
        </li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to fulfill
        the purposes outlined in this Privacy Policy, including:
      </p>
      <ul>
        <li>To provide our services.</li>
        <li>To comply with legal obligations and regulatory requirements.</li>
        <li>To resolve disputes and enforce our agreements.</li>
        <li>To maintain accurate business and financial records.</li>
      </ul>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>
          <strong>Access:</strong> Request access to the personal information we
          hold about you.
        </li>
        <li>
          <strong>Correction:</strong> Request correction of any inaccurate or
          incomplete personal information.
        </li>
        <li>
          <strong>Deletion:</strong> Request deletion of your personal
          information, subject to certain legal and regulatory limitations.
        </li>
        <li>
          <strong>Restriction:</strong> Request restriction of the processing of
          your personal information.
        </li>
        <li>
          <strong>Objection:</strong> Object to the processing of your personal
          information for certain purposes, including direct marketing.
        </li>
        <li>
          <strong>Data Portability:</strong> Request the transfer of your
          personal information to another entity.
        </li>
        <li>
          <strong>Withdraw Consent:</strong> Withdraw your consent at any time,
          where we rely on your consent to process your information.
        </li>
      </ul>
      <p>
        To exercise these rights, please contact us using the information
        provided below.
      </p>

      <h2>Cookies and Tracking Technologies</h2>
      <p>
        Our website uses cookies and similar tracking technologies to enhance
        your browsing experience and collect information about your usage
        patterns. You can manage your cookie preferences through your browser
        settings.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these third-party
        sites. We encourage you to review their privacy policies before
        providing any personal information.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on our website and
        updating the effective date. Your continued use of our website and
        services after such changes constitutes your acceptance of the new
        Privacy Policy.
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

export default Privacy;
