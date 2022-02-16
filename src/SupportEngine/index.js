import { useState, useRef, useEffect } from "react";
import Avatar from "./Avatar";
import SupportWindow from "./SupportWindow";

/**
 * Hook that alerts clicks outside of the passed ref
 */

const SupportEngine = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /**
     * if clicked on outside of element => ref.current.contains(event.target)
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <SupportWindow visible={visible} />
      <Avatar
        onClick={() => setVisible(true)}
        style={{ position: "fixed", bottom: "24px", right: "24px" }}
      />
    </div>
  );
};

export default SupportEngine;
