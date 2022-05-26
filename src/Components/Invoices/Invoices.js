import React from "react";

import Invoice from "../Invoice/Invoice";

var Invoices = (props) => {
  return (
    <section className="posts">
      {props.invo?.map((invoice_prop, postIndex) => {
        return <Invoice invoice_prop={invoice_prop} postIndex={postIndex} key={postIndex} />;
      })}
    </section>
  );
};

export default Invoices;
