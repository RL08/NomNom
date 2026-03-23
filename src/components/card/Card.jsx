import { cn } from "@/utils/cn.js";
import { Link } from "react-router-dom";
import "@/components/card/styles/Card.css";
import "@/components/card/styles/CardBody.css";
import "@/components/card/styles/CardTitle.css";
import "@/components/card/styles/CardDescription.css";
import "@/components/card/styles/CardImage.css";
import "@/components/card/styles/CardOverlay.css";
import "@/components/card/styles/CardLink.css";

function Card({ variant = "", children, ...props }) {
  return (
    <div className={cn("card", variant)} {...props}>
      {children}
    </div>
  );
}

function CardBody({ variant = "", children, ...props }) {
  return (
    <div className={cn("cardbody", variant)} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ variant = "", children, ...props }) {
  return (
    <h3 className={cn("cardtitle", variant)} {...props}>
      {children}
    </h3>
  );
}

function CardDescription({ variant = "", children, ...props }) {
  return (
    <p className={cn("carddescription", variant)} {...props}>
      {children}
    </p>
  );
}

function CardImage({ variant = "", ...props }) {
  return <img className={cn("cardimg", variant)} {...props} />;
}

function CardOverlay({ variant = "", ...props }) {
  return <div className={cn("cardoverlay", variant)} {...props} />;
}

function CardLink({ variant = "", to, children }) {
  return (
    <Link className={cn("cardlink", variant)} to={to}>
      {children}
    </Link>
  );
}

export {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardDescription,
  CardOverlay,
  CardLink,
};
