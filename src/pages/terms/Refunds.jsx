import React, { useEffect } from "react";
import "./h.scss";

const Refunds = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="terms_container">
      <h1>Refund Policy for TradeFlair Corporate Services Pvt Ltd</h1>

      <h2>Introduction</h2>
      <p>
        At TradeFlair Corporate Services Pvt Ltd ("we," "our," "us"), we are
        committed to providing our clients with the highest level of service.
        This Refund Policy outlines the terms and conditions under which refunds
        may be granted. By engaging our services, you agree to the terms of this
        Refund Policy.
      </p>

      <h2>General Refund Policy</h2>
      <p>
        <strong>Non-Refundable Fees:</strong> All fees received by TradeFlair
        Corporate Services Pvt Ltd are non-refundable. This applies to all
        services provided, including but not limited to Import Finance (Buyer's
        Credit and Supplier's Credit), Export LC Bill Discounting, and Local LC
        Bill Discounting.
      </p>
      <p>
        We operate on a strict no-refund policy because our services involve
        extensive preparation, financial commitments, and third-party costs
        which are non-recoverable once the service has commenced or been
        rendered.
      </p>

      <h2>Exceptions to the Refund Policy</h2>
      <p>
        In rare circumstances, we may consider a refund request on a
        case-by-case basis under the following conditions:
      </p>
      <ul>
        <li>
          <strong>Service Non-Performance:</strong> If TradeFlair Corporate
          Services Pvt Ltd fails to provide the agreed-upon services, you may be
          eligible for a partial or full refund, subject to review and approval
          by our management.
        </li>
        <li>
          <strong>Duplicate Payment:</strong> If a duplicate payment is made for
          the same service, we will review the situation and may issue a refund
          for the duplicate amount.
        </li>
      </ul>

      <h2>Refund Request Process</h2>
      <p>To request a refund, please follow these steps:</p>
      <ol>
        <li>
          <strong>Submit a Request:</strong> Send an email to
          [your-email@example.com] with the subject line "Refund Request."
          Include your full name, contact information, transaction details, and
          the reason for the refund request.
        </li>
        <li>
          <strong>Review and Response:</strong> We will review your request and
          respond within 10 business days. During this time, we may request
          additional information to process your request.
        </li>
        <li>
          <strong>Decision:</strong> After reviewing your request, we will
          inform you of our decision via email. If approved, the refund will be
          processed within 15 business days from the date of approval.
        </li>
      </ol>

      <h2>Refund Method</h2>
      <p>
        Refunds, if approved, will be issued using the same method of payment
        used for the original transaction. For example, if you paid via bank
        transfer, the refund will be issued via bank transfer.
      </p>

      <h2>Changes to the Refund Policy</h2>
      <p>
        We reserve the right to modify this Refund Policy at any time. Any
        changes will be posted on our website with the updated effective date.
        Your continued use of our services after any changes to this policy will
        constitute your acceptance of such changes.
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

export default Refunds;
