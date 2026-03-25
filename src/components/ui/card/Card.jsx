import { cn } from "@/utils/cn.js";
import "@/components/ui/card/styles/Card.css";
import "@/components/ui/card/styles/CardBody.css";
import "@/components/ui/card/styles/CardTitle.css";
import "@/components/ui/card/styles/CardDescription.css";
import "@/components/ui/card/styles/CardImage.css";
import "@/components/ui/card/styles/CardOverlay.css";

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

export {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardDescription,
  CardOverlay,
};
