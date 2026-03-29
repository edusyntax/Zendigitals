import { ButtonItem } from "@/types/button";

export const heroButtons: ButtonItem[] = [
  {
    label: "contact us",
    type: "call",
    phone: "+919753456333",
    variant: "primary"
  },
  {
    label: "WhatsApp Us",
    type: "whatsapp",
    whatsapp: "919753456333",
    variant: "secondary",
    newTab: true
  }
];