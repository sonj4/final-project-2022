import { useState } from "react";
export default function ReadMore({ children })  {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div className="readMoreText">
        {isReadMore ? text.slice(0, 500) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </div>
    );
  };