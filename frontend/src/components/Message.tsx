import React, {FC} from 'react';
import {Alert} from "react-bootstrap";
import {Variant} from "react-bootstrap/types";

const Message: FC<{
  variant?: Variant;
}> = ({variant, children}) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  );
};

export default Message;
