"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform, useInView, motion } from "framer-motion";

export function AnimatedCounter({
    value,
    direction = "up",
}: {
    value: number;
    direction?: "up" | "down";
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 100,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        }
    }, [motionValue, value, direction, isInView]);

    const displayText = useTransform(springValue, (latest) =>
        Math.round(latest).toString()
    );

    return <motion.span ref={ref}>{displayText}</motion.span>;
}
