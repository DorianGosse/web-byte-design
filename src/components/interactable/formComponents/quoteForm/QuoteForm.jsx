import React, { Component } from "react";
import "./QuoteForm.css";

import Dropdown from "../../dropdown/Dropdown";
import { Button } from "../../button/button";

import { AiOutlineQuestionCircle } from "react-icons/ai";
class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*business type options should have no effect on the pricing 
        of the calculation
        =============================================================*/
      businessTypeOptions: [
        { value: "smallBusiness", label: "Small Business" },
        { value: "personalBrand", label: "Personal Brand" },
        { value: "events", label: "Events" },
        { value: "creative", label: "Writers / Artists" },
      ],

      webDesignOptions: [
        {
          value: "designRequired",
          label: "Full Design Required",
          costLow: 125.0,
          costHigh: 125.0,
        },
        {
          value: "noDesignRequired",
          label: "No Design Required",
          costLow: 50.0,
          costHigh: 50.0,
        },
        {
          value: "partialDesignRequired",
          label: "Some Design Required",
          costLow: 75.0,
          costHigh: 75.0,
        },
      ],
      /*cost is x factor of the per page value only
      ====================================================*/
      responseOptions: [
        {
          value: "fullyResponsive",
          label: "Fully Responsive",
          costFactor: 1.5,
        },
        { value: "desktopOnly", label: "Desktop Only", costFactor: 1 },
        { value: "mobileOnly", label: "Mobile Only", costFactor: 1 },
        { value: "mobileTablet", label: "Mobile + Tablet", costFactor: 1.25 },
        { value: "mobileDesktop", label: "Mobile + Desktop", costFactor: 1.25 },
        { value: "unknown", label: "Not Sure", costFactor: 1 },
      ],
      graphicDesignOptions: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
      imageOptions: [
        { value: "1-5", label: "1-5", costlow: 4.5, costHigh: 22.5 },
        { value: "6-10", label: "6-10", costlow: 25.5, costHigh: 42.5 },
        { value: "11-20", label: "11-20", costlow: 44.0, costHigh: 80.0 },
        { value: "21+", label: "21+", costlow: 80.85, costHigh: 80.85 },
      ],
      logoOptions: [
        { value: "oneLogo", label: "1", costLow: 15.0, costHigh: 15.0 },
        { value: "2-3", label: "2-3", costLow: 25.0, costHigh: 37.5 },
        { value: "4-5", label: "4-5", costLow: 40.0, costHigh: 50.0 },
        { value: "5+", label: "5+", costLow: 60.0, costHigh: 60.0 },
      ],
      cmsOptions: [
        {
          value: "cmsNeeded",
          label: "I will need a CMS",
          costLow: 50.0,
          costHigh: 50.0,
        },
        { value: "noCms", label: "No CMS Needed", costLow: 0.0, costHigh: 0.0 },
        { value: "unsure", label: "TBD", costLow: 0.0, costHigh: 50.0 },
      ],
      domainOptions: [
        { value: "noDomain", label: "I Have a Domain", costLow: 0.0 },
        {
          value: "domainNeeded",
          label: "I Need a Domain",
          costLow: 10.0,
          costHigh: 10.0,
        },
        { value: "unsure", label: "TBD", costLow: 0.0, costHigh: 10.0 },
      ],
      numPageOptions: [
        { value: "1-5", label: "1-5", costLow: 15.0, costHigh: 75.0 },
        { value: "6-10", label: "6-10", costLow: 78.0, costHigh: 130.0 },
        { value: "11-20", label: "11-20", costLow: 121.0, costHigh: 220.0 },
        { value: "moreThan20", label: "21+", costLow: 210.0, costHigh: 210.0 },
      ],
      retainerOptions: [
        { value: "noRetainer", label: "No Retainer", costMonthly: 0.0 },
        { value: "basicRetainer", label: "Basic Retainer", costMonthly: 35.0 },
        { value: "biMonthly", label: "1-2 Updates / Month", costMonthly: 55.0 },
        { value: "perWeek", label: "Weekly update", costMonthly: 75.0 },
        {
          value: "manyPerWeek",
          label: "Multiple Updates Weekly",
          costMonthly: 90.0,
        },
      ],
      /*Timeline price factor should be the factor cost of the whole website cost not just pages
      ==========================================================================================*/
      timelineOptions: [
        {
          value: "TBD",
          label: "No timeline / TBD",
          costXLow: 1.0,
          costXHigh: 1.0,
        },
        { value: "2months", label: "2+ Months", costXLow: 1.0, costXHigh: 1.0 },
        {
          value: "1-2months",
          label: "1-2 Months",
          costXLow: 1.25,
          costXHigh: 1.75,
        },
        {
          value: "2-4weeks",
          label: "2-4 Weeks",
          costXLow: 1.75,
          costXHigh: 2.25,
        },
        { value: "2Weeks", label: "2 Weeks", costXLow: 2.75, costXHigh: 3.25 },
      ],
      hostingOptions: [
        {
          value: "hostingNeeded",
          label: "Web hosting needed",
          costMonthly: 20.0,
        },
        { value: "noHosting", label: "No hosting needed", costMonthly: 0.0 },
        { value: "unsure", label: "TBD", costMonthly: 10.0 },
      ],
    };
  }
  render() {
    const priceHigh = 0.0;
    const priceLow = 0.0;
    /*Check this label html for nonsence I dont think becuase using dropdown that it connects to the dropdown ID
    Consider refactoring each line item div to a seporate component*/
    return (
      <div className="quote-form">
        <h4 id="quote-form-header">Estimate Calculator</h4>
        <div className="quote-divider" id="left-half">
          <div className="form-line-item" id="business-type-container">
            <label htmlFor="select-business" className="form-label">
              Business Type: <AiOutlineQuestionCircle />
            </label>
            <Dropdown
              className="selection-dropdown"
              id="select-business"
              placeholder="Select Business Type"
              options={this.state.businessTypeOptions}
            />
          </div>

          <div className="form-line-item" id="web-design-container">
            <label htmlFor="select-web-design" className="form-label">
              Web Design Required?: <AiOutlineQuestionCircle />
            </label>
            <Dropdown
              className="selection-dropdown"
              id="select-wed-design"
              placeholder="Design Selection"
              options={this.state.webDesignOptions}
            />
          </div>
          <div className="form-line-item" id="graphic-container">
            <label htmlFor="select-graphic-design" className="form-label">
              Graphic Design Required?: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="selection-dropdown"
              id="select-graphic-design"
              placeholder="Select Graphic Design"
              options={this.state.graphicDesignOptions}
            />
          </div>

          <div className="form-line-item" id="logo-container">
            <label htmlFor="select-logos" className="form-label">
              Logos Required: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="condition-dropdown"
              id="select-logos"
              placeholder="Select No. of Logos"
              options={this.state.logoOptions}
            />
          </div>

          <div className="form-line-item" id="image-container">
            <label htmlFor="select-images" className="form-label">
              Images Required: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="condition-dropdown"
              id="select-images"
              placeholder="Select No. of Images"
              options={this.state.imageOptions}
            />
          </div>
        </div>
        <div className="quote-divider" id="quote-right-half">
          <div className="form-line-item" id="pages-container">
            <label htmlFor="select-pages" className="form-label">
              Pages Required: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="selection-dropdown"
              id="select-pages"
              placeholder="Select No. of Pages"
              options={this.state.numPageOptions}
            />
          </div>

          <div className="form-line-item" id="responsive-container">
            <label htmlFor="responsive-selection" className="form-label">
              Response Level: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="selection-dropdown"
              id="response-selection"
              placeholder="Targeted Devices"
              options={this.state.responseOptions}
            />
          </div>
          <div className="form-line-item" id="domain-container">
            <label htmlFor="domain-selection" className="form-label">
              Domain Required?: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="selection-dropdown"
              id="domain-selection"
              placeholder="Domain Required?"
              options={this.state.domainOptions}
            />
          </div>

          <div className="form-line-item" id="cms">
            <label htmlFor="cms-selection" className="form-label">
              CMS Required: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="selection-dropdown"
              id="cms-selection"
              placeholder="CMS Selection"
              options={this.state.cmsOptions}
            />
          </div>

          <div className="form-line-item" id="timeline">
            <label htmlFor="timeline-selection" className="form-label">
              Project Timeline: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="selection-dropdown"
              id="timeline-selection"
              placeholder="Select Timeline"
              options={this.state.timelineOptions}
            />
          </div>

          <div className="form-line-item" id="retainer-container">
            <label htmlFor="retainer-selection" className="form-label">
              Retainer: <AiOutlineQuestionCircle />
            </label>

            <Dropdown
              className="selection-dropdown"
              id="retainer-selection"
              placeholder="Select Retainer"
              options={this.state.retainerOptions}
            />
          </div>
        </div>
        <Button>Email Copy</Button>
        <Button>Clear</Button>
      </div>
    );
  }
}

export default QuoteForm;
