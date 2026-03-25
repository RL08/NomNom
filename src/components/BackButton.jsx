import Button from "@/components/ui/button/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function BackButton({ variant = "" }) {
  const navigate = useNavigate();

  return (
    <Button variant={`nostyle sm ${variant}`} onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon="arrow-left" />
      Back
    </Button>
  );
}

export default BackButton;
