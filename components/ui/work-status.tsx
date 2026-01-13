"use client";

import { Container } from "@/components/ui/container";
import { useTranslations } from "next-intl";

type Status = "available" | "limited" | "unavailable";

interface WorkStatusProps {
    status: Status;
}

export function WorkStatus({ status }: WorkStatusProps) {
    const t = useTranslations("about");

    const config = {
        available: {
            color: "bg-green-500",
            pingColor: "bg-green-400",
            text: t("statusAvailable"),
        },
        limited: {
            color: "bg-orange-500",
            pingColor: "bg-orange-400",
            text: t("statusLimited"),
        },
        unavailable: {
            color: "bg-red-500",
            pingColor: "bg-red-400",
            text: t("statusUnavailable"),
        },
    };

    const { color, pingColor, text } = config[status];

    return (
        <Container className="flex flex-col items-center justify-around h-[8rem]">
            <span className="relative flex size-5">
                <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingColor} opacity-75`}
                />
                <span
                    className={`relative inline-flex rounded-full size-5 ${color}`}
                />
            </span>
            <p className="text-xl font-extrabold text-center">{text}</p>
        </Container>
    );
}
