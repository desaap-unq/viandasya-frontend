import React from "react";

import { Container } from "reactstrap";
import {FormattedHTMLMessage} from 'react-intl';

function SearchPageHeader(props) {
  let pageHeader = React.createRef();
  const businesses = props.businesses.length;
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/big-food-infographics-free-royalty3533.jpg") + ")"
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />

        <Container className="header-searchPage search-result">
          <h2>
            {businesses} 
          <FormattedHTMLMessage id="app.headerBusines"
            defaultMessage=" Locales para una busqueda"
            />
          </h2>

        </Container>
      </div>
    </>
  );
}

export default SearchPageHeader;
