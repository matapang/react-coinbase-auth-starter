import React from "react";
import { Card } from "antd";

import { RiseOutlined } from "@ant-design/icons";

const Balance = (props) => {
  const { value } = props;
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h4 style={{ marginLeft: 5 }}>Available Balance</h4>
      {(value || []).map((item, key) => (
        <Card key={key} hoverable>
          {item.balance.amount} {item.balance.currency}
          <RiseOutlined className="pull-right" style={{ fontSize: 30 }} />
        </Card>
      ))}
    </div>
  );
};

export default Balance;
