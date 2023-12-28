import { Component } from "react";
import "./index.css";
import FaqItem from "../FaqItem";

class Faqs extends Component {
  render() {
    const { faqsList } = this.props;
    return (
      <div className="app-container">
        <div className="card-container">
          <h2 className="freq-head">Frequently Asked Questions</h2>
          <ul className="faqs-list">
            {faqsList.map((eachItem) => (
              <FaqItem key={eachItem.id} faqDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Faqs;
