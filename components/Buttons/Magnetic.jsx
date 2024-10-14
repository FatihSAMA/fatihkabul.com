"use client";

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Magnetic({children}) {
    const magnetic = useRef(null);

    useEffect( () => {
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x);
            yTo(y)
        }

        const mouseLeave = () => {
            gsap.to(magnetic.current, {x: 0, duration: 1})
            gsap.to(magnetic.current, {y: 0, duration: 1})
        }

        // Fare ve dokunma olaylarını dinle
        magnetic.current?.addEventListener("mousemove", mouseMove);
        magnetic.current?.addEventListener("mouseleave", mouseLeave);

        // Dokunmatik ekranlar için touch event'leri
        magnetic.current?.addEventListener("touchmove", mouseMove);
        magnetic.current?.addEventListener("touchend", mouseLeave);

        return () => {
            magnetic.current?.removeEventListener("mousemove", mouseMove);
            magnetic.current?.removeEventListener("mouseleave", mouseLeave);
            magnetic.current?.removeEventListener("touchmove", mouseMove);
            magnetic.current?.removeEventListener("touchend", mouseLeave);
        }
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}
