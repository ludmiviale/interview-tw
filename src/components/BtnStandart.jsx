import React from "react";
import Button from "react-bootstrap/Button";

const BtnStandart = ({
  type,
  action,
  title,
  isDisabled,
  marginRight,
  imgSrc,
  icon,
  isCenter,
  isMinWidth,
  isMinHeight,
  children,
}) => {
  return (
    <div style={{ marginRight }}>
      {type === "primary" && (
        <Button onClick={action} variant="primary" disabled={isDisabled}>
          {children ? children : title}
        </Button>
      )}
      {type === "primaryHome" && (
        <Button onClick={action} variant="primaryHome" disabled={isDisabled}>
          {children ? children : title}
        </Button>
      )}
      {type === "secondary" && (
        <Button onClick={action} variant="secondary" disabled={isDisabled}>
          {title}
        </Button>
      )}
      {type === "success" && (
        <Button onClick={action} variant="success">
          {title}
        </Button>
      )}
      {type === "warning" && (
        <Button onClick={action} variant="warning">
          {title}
        </Button>
      )}
      {type === "warning-active" && (
        <Button
          onClick={action}
          variant="warning"
          style={{ backgroundColor: "white" }}
        >
          {title}
        </Button>
      )}
      {type === "danger" && (
        <Button onClick={action} variant="danger">
          {title}
        </Button>
      )}
      {type === "info" && (
        <Button onClick={action} variant="info">
          {title}
        </Button>
      )}
      {type === "light" && (
        <Button
          onClick={action}
          variant="light"
          disabled={isDisabled}
          style={{
            justifyContent: isCenter ? "center" : "space-beetwen",
            width: isMinWidth ? "140px" : "230px",
            height: isMinHeight ? "32px" : "38px",
          }}
        >
          <p style={{ whiteSpace: "nowrap", marginRight: "15px" }}>{title}</p>
          {icon && React.createElement(icon, { size: 22 })}
          {imgSrc && (
            <div>
              <img src={imgSrc} width="25px" alt="button-icon" />
            </div>
          )}
        </Button>
      )}
      {type === "dark" && (
        <Button onClick={action} variant="dark">
          {title}
        </Button>
      )}
      {type === "link" && (
        <Button onClick={action} variant="link">
          {title}
        </Button>
      )}

      {type === "especial" && (
        <Button
          onClick={action}
          variant="especial"
          style={{
            display: "flex",
            justifyContent: isCenter ? "center" : "space-beetwen",
            width: isMinWidth ? "140px" : "230px",
            border: "2px solid #2b4162",
            color: "white",
            backgroundColor: "#2b4162",
            borderRadius: "15px",
            alignItems: "center",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          <p style={{ whiteSpace: "nowrap", marginRight: "15px" }}>{title}</p>
          {icon && React.createElement(icon, { size: 22 })}
          {imgSrc && (
            <div>
              <img src={imgSrc} width="25px" alt="button-icon" />
            </div>
          )}
        </Button>
      )}
      {type === "lightEspecial" && (
        <Button
          onClick={action}
          variant="lightEspecial"
          style={{
            display: "flex",
            justifyContent: isCenter ? "center" : "space-beetwen",
            width: isMinWidth ? "140px" : "230px",
            border: "2px solid #2b4162",
            color: "#2b4162",
            backgroundColor: "white",
            borderRadius: "15px",
            alignItems: "center",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          <p style={{ whiteSpace: "nowrap", marginRight: "15px" }}>{title}</p>
          {icon && React.createElement(icon, { size: 22 })}
          {imgSrc && (
            <div>
              <img src={imgSrc} width="25px" alt="button-icon" />
            </div>
          )}
        </Button>
      )}
    </div>
  );
};

export default BtnStandart;
