"use client";
import { LanguageIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import { useRef } from "react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

export function LocaleSwitcherSelect() {
  const buttonRef1 = useRef<HTMLButtonElement | null>(null);
  const buttonRef2 = useRef<HTMLButtonElement | null>(null);

  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;

    startTransition(() => {
      setUserLocale(locale);
    });
  }

  function OpenLanguage() {
    if (buttonRef1.current && buttonRef2.current) {
      if (
        buttonRef1.current.classList.contains("hidden") &&
        buttonRef2.current.classList.contains("hidden")
      ) {
        buttonRef1.current.classList.remove("hidden");
        buttonRef1.current.classList.add("flex");
        buttonRef2.current.classList.remove("hidden");
        buttonRef2.current.classList.add("flex");
      } else {
        buttonRef1.current.classList.remove("flex");
        buttonRef1.current.classList.add("hidden");
        buttonRef2.current.classList.remove("flex");
        buttonRef2.current.classList.add("hidden");
      }
    }
  }

  return (
    <div className="size-6">
      <LanguageIcon className="hover: cursor-pointer" onClick={OpenLanguage} />
      <button
        ref={buttonRef1}
        className="hidden"
        onClick={() => {
          onChange("en");
          OpenLanguage();
        }}
      >
        English
      </button>
      <button
        ref={buttonRef2}
        className="hidden"
        onClick={() => {
          onChange("pt");
          OpenLanguage();
        }}
      >
        Português
      </button>
    </div>
  );
}
