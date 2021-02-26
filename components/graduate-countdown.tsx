import { useEffect, useState } from "react";
import humanizeDuration from "humanize-duration";

const graduationDate = new Date("5.31.2023 16:00:00");
const graduationTime = graduationDate.getTime();

const GraduateCountdown = () => {
  const [seconds, setSeconds] = useState(graduationTime - Date.now());

  useEffect(() => {
    const id = setInterval(
      () => setSeconds(graduationTime - Date.now()),
      10000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span>
      {humanizeDuration(seconds, {
        round: true,
        conjunction: " and ",
        units: ["y", "d", "h", "m"],
      })}
    </span>
  );
};

export default GraduateCountdown;
