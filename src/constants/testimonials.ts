import { t } from '../lib/i18n';

export const testimonials = [
  {
    nameKey: "testimonials.client1.name",
    get name() { return t("testimonials.client1.name"); },
    roleKey: "testimonials.client1.role",
    get role() { return t("testimonials.client1.role"); },
    textKey: "testimonials.client1.text",
    get text() { return t("testimonials.client1.text"); },
    initial: "B",
    color: "from-primary-500 to-primary-600"
  },
  {
    nameKey: "testimonials.client2.name",
    get name() { return t("testimonials.client2.name"); },
    roleKey: "testimonials.client2.role",
    get role() { return t("testimonials.client2.role"); },
    textKey: "testimonials.client2.text",
    get text() { return t("testimonials.client2.text"); },
    initial: "S",
    color: "from-secondary-500 to-secondary-600"
  },
  {
    nameKey: "testimonials.client3.name",
    get name() { return t("testimonials.client3.name"); },
    roleKey: "testimonials.client3.role",
    get role() { return t("testimonials.client3.role"); },
    textKey: "testimonials.client3.text",
    get text() { return t("testimonials.client3.text"); },
    initial: "A",
    color: "from-primary-500 to-secondary-500"
  },
];
