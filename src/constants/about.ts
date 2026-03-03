import { t } from '../lib/i18n';

export const features = [
  {
    titleKey: "about.feature1.title",
    get title() { return t("about.feature1.title"); },
    descKey: "about.feature1.desc",
    get desc() { return t("about.feature1.desc"); },
    icon: "target",
  },
  {
    titleKey: "about.feature2.title",
    get title() { return t("about.feature2.title"); },
    descKey: "about.feature2.desc",
    get desc() { return t("about.feature2.desc"); },
    icon: "ai",
  },
  {
    titleKey: "about.feature3.title",
    get title() { return t("about.feature3.title"); },
    descKey: "about.feature3.desc",
    get desc() { return t("about.feature3.desc"); },
    icon: "puzzle",
  },
  {
    titleKey: "about.feature4.title",
    get title() { return t("about.feature4.title"); },
    descKey: "about.feature4.desc",
    get desc() { return t("about.feature4.desc"); },
    icon: "support",
  },
];

export const stats = [
  {
    numberKey: "about.stat1.number",
    get number() { return t("about.stat1.number"); },
    labelKey: "about.stat1.label",
    get label() { return t("about.stat1.label"); },
  },
  {
    numberKey: "about.stat2.number",
    get number() { return t("about.stat2.number"); },
    labelKey: "about.stat2.label",
    get label() { return t("about.stat2.label"); },
  },
  {
    numberKey: "about.stat3.number",
    get number() { return t("about.stat3.number"); },
    labelKey: "about.stat3.label",
    get label() { return t("about.stat3.label"); },
  },
  {
    numberKey: "about.stat4.number",
    get number() { return t("about.stat4.number"); },
    labelKey: "about.stat4.label",
    get label() { return t("about.stat4.label"); },
  },
];
