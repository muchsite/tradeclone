import React, { useEffect } from "react";
import "./h.scss";
const Terms = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="terms_container">
      <h1>Terms and Conditions for TradeFlair Corporate Services Pvt Ltd</h1>
      <h2>Introduction</h2>
      <p>
        Welcome to TradeFlair Corporate Services Pvt Ltd ("we," "our," "us").
        These Terms and Conditions ("Terms") govern your use of our website and
        services. By accessing our website and using our services, you agree to
        comply with these Terms. If you do not agree with these Terms, please do
        not use our website or services.
      </p>

      <h2>Definitions</h2>
      <ul>
        <li>
          <strong>“Client”:</strong> Refers to any individual or entity that
          uses our services.
        </li>
        <li>
          <strong>“Services”:</strong> Refers to the financial services provided
          by TradeFlair Corporate Services Pvt Ltd, including import finance,
          export LC bill discounting, and local LC bill discounting.
        </li>
        <li>
          <strong>"Website”:</strong> Refers to our official website,{" "}
          <a href="http://www.tradeflaircorporate.com">
            www.tradeflaircorporate.com
          </a>
          .
        </li>
      </ul>

      <h2>Eligibility</h2>
      <p>
        By using our website and services, you represent and warrant that you:
      </p>
      <ul>
        <li>Are at least 18 years old.</li>
        <li>Have the legal capacity to enter into a binding agreement.</li>
        <li>Are not prohibited by law from using our services.</li>
      </ul>

      <h2>Services</h2>
      <h3>Import Finance</h3>
      <ul>
        <li>
          <strong>Buyer's Credit:</strong> Financing provided to importers
          backed by a Standby Letter of Credit (SBLC).
        </li>
        <li>
          <strong>Supplier's Credit:</strong> Financing provided as an LC
          discounting facility for import transactions.
        </li>
      </ul>

      <h3>Export LC Bill Discounting</h3>
      <ul>
        <li>
          Financing provided for exporters by discounting export Letters of
          Credit (LC).
        </li>
      </ul>

      <h3>Local LC Bill Discounting</h3>
      <ul>
        <li>
          Financing provided for the purchase and sale of goods within India by
          discounting local Letters of Credit (LC).
        </li>
      </ul>

      <h2>User Responsibilities</h2>
      <p>As a user of our website and services, you agree to:</p>
      <ul>
        <li>
          Provide accurate and complete information when registering or
          submitting inquiries.
        </li>
        <li>Use our services only for lawful purposes.</li>
        <li>
          Not engage in any activity that could harm or disrupt our services or
          website.
        </li>
        <li>Comply with all applicable laws and regulations.</li>
      </ul>

      <h2>Fees and Payment</h2>
      <ul>
        <li>
          We charge fees for our services, which are detailed in our service
          agreements.
        </li>
        <li>Fees are payable after the transaction is funded.</li>
        <li>
          All fees received by TradeFlair Corporate Services Pvt Ltd are
          non-refundable.
        </li>
        <li>
          Payment terms and conditions will be specified in the respective
          service agreements.
        </li>
      </ul>

      <h2>Intellectual Property</h2>
      <ul>
        <li>
          All content on our website, including text, graphics, logos, and
          software, is the property of TradeFlair Corporate Services Pvt Ltd or
          its licensors and is protected by intellectual property laws.
        </li>
        <li>
          You may not use, reproduce, or distribute any content from our website
          without our prior written consent.
        </li>
      </ul>

      <h2>Limitation of Liability</h2>
      <ul>
        <li>
          Our services are provided on an "as-is" and "as-available" basis.
        </li>
        <li>
          We do not warrant that our services will be uninterrupted, error-free,
          or secure.
        </li>
        <li>
          To the fullest extent permitted by law, we disclaim all warranties,
          express or implied, including but not limited to warranties of
          merchantability and fitness for a particular purpose.
        </li>
        <li>
          We will not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising out of or in connection
          with your use of our services.
        </li>
      </ul>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless TradeFlair Corporate
        Services Pvt Ltd, its officers, directors, employees, agents, and
        affiliates from and against any claims, liabilities, damages, losses,
        and expenses, including legal fees, arising out of or in any way
        connected with your use of our website and services, or your violation
        of these Terms.
      </p>

      <h2>Termination</h2>
      <ul>
        <li>
          We reserve the right to terminate or suspend your access to our
          website and services at our sole discretion, without notice, for
          conduct that we believe violates these Terms or is harmful to our
          interests.
        </li>
        <li>
          Upon termination, all provisions of these Terms that by their nature
          should survive termination shall survive, including intellectual
          property rights, limitation of liability, and indemnification.
        </li>
      </ul>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of Noida, without regard to its conflict of law principles.
      </p>

      <h2>Dispute Resolution</h2>
      <ul>
        <li>
          Any disputes arising out of or in connection with these Terms shall be
          resolved through amicable negotiations.
        </li>
        <li>
          If a dispute cannot be resolved amicably, it shall be submitted to
          binding arbitration in accordance with the rules of the Indian Council
          of Arbitration (ICA), with the arbitration taking place in Delhi.
        </li>
      </ul>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of any
        changes by posting the new Terms on our website and updating the
        effective date. Your continued use of our website and services after
        such changes constitutes your acceptance of the new Terms.
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

export default Terms;
