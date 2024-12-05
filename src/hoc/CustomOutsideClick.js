
import React, { useRef, useEffect } from 'react';

export const CustomOutsideClick= React.memo((props) => {
    
    const { children, onClickOutside = () => null, className } = props
    const wrapperRef = useRef(null)

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [children])

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current?.contains(event.target)) {
            //onClickOutside()
            document.querySelector("body").classList.remove("open-sidebox");            
        }
    }

  return (
    <div className={className} ref={wrapperRef} >
        {children}
    </div>
  );
})
