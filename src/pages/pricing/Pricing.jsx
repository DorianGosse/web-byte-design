import React from "react";
import "./Pricing.css";

import QuoteCalc from "../../components/interactable/formComponents/quoteForm/QuoteForm";

import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import QuoteForm from "../../components/interactable/formComponents/quoteForm/QuoteForm";

export default function Pricing() {
  return (
    <div className="pricing-page">
      <div className="navigation">
        <NavBar />
      </div>

      <div className="pricing-calc">
        <QuoteForm />
      </div>

      <div className="pricing-disclaimer">
        <p id="full-disclaimer">
          *** This pricing calculator is used for a rough price range based on
          limited information meant to provide a very rought cost estimate.
          calculated estimates are NOT to be taken as final quotes as costs are
          subject to change based on additonial information and or business
          requirements. For final quotes on web solutions please contact us
          using the contact page <a href="/contact">here</a> for more
          information ***
        </p>

        <p id="disclaimer-1902">
          ** Quotes obtained from this calculator are NOT to be considered a
          final quote. For a full quote contact us <a href="/contact">here</a>
          **
        </p>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
