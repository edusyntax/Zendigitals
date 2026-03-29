import { ButtonItem } from "@/types/button";

interface Props {
  buttons: ButtonItem[];
}

function getHref(btn: ButtonItem): string {
  switch (btn.type) {
    case "call":
      return `tel:${btn.phone}`;

    case "whatsapp":
      return `https://wa.me/${btn.whatsapp}`;

    case "link":
      return btn.href || "#";

    default:
      return "#";
  }
}

export function ButtonGroup({ buttons }: Props) {
  return (
    <div className="flex items-center gap-3 w-full sm:w-auto pt-4">

      {buttons.map((btn, i) => {
        const isPrimary = btn.variant === "primary";

        return (
          <a
            key={i}
            href={getHref(btn)}
            target={btn.newTab ? "_blank" : undefined}
            rel={btn.newTab ? "noopener noreferrer" : undefined}
            className={`
              flex-1 sm:flex-none
              px-5 py-3 rounded-full
              text-sm sm:text-base
              whitespace-nowrap text-center transition

              ${isPrimary
                ? "bg-primary text-primary-foreground hover:scale-105 shadow-lg"
                : "border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground"
              }
            `}
          >
            {btn.label}
          </a>
        );
      })}

    </div>
  );
}