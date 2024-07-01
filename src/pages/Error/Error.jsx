import { useEffect } from "react";
import { useNavigate } from "react-router";

function Error() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  });
}

export default Error;
