import { t } from '../lib/i18n';

export const services = [
  {
    titleKey: 'services.fullstack.title',
    get title() { return t('services.fullstack.title'); },
    descKey: 'services.fullstack.desc',
    get desc() { return t('services.fullstack.desc'); },
    icon: 'code',
    features: [
      { key: 'services.fullstack.feature1', get text() { return t('services.fullstack.feature1'); } },
      { key: 'services.fullstack.feature2', get text() { return t('services.fullstack.feature2'); } },
      { key: 'services.fullstack.feature3', get text() { return t('services.fullstack.feature3'); } },
      { key: 'services.fullstack.feature4', get text() { return t('services.fullstack.feature4'); } }
    ],
    color: 'primary'
  },
  {
    titleKey: 'services.mobile.title',
    get title() { return t('services.mobile.title'); },
    descKey: 'services.mobile.desc',
    get desc() { return t('services.mobile.desc'); },
    icon: 'mobile',
    features: [
      { key: 'services.mobile.feature1', get text() { return t('services.mobile.feature1'); } },
      { key: 'services.mobile.feature2', get text() { return t('services.mobile.feature2'); } },
      { key: 'services.mobile.feature3', get text() { return t('services.mobile.feature3'); } },
      { key: 'services.mobile.feature4', get text() { return t('services.mobile.feature4'); } }
    ],
    color: 'secondary'
  },
  {
    titleKey: 'services.website.title',
    get title() { return t('services.website.title'); },
    descKey: 'services.website.desc',
    get desc() { return t('services.website.desc'); },
    icon: 'globe',
    features: [
      { key: 'services.website.feature1', get text() { return t('services.website.feature1'); } },
      { key: 'services.website.feature2', get text() { return t('services.website.feature2'); } },
      { key: 'services.website.feature3', get text() { return t('services.website.feature3'); } },
      { key: 'services.website.feature4', get text() { return t('services.website.feature4'); } }
    ],
    color: 'primary'
  },
  {
    titleKey: 'services.ai.title',
    get title() { return t('services.ai.title'); },
    descKey: 'services.ai.desc',
    get desc() { return t('services.ai.desc'); },
    icon: 'ai',
    features: [
      { key: 'services.ai.feature1', get text() { return t('services.ai.feature1'); } },
      { key: 'services.ai.feature2', get text() { return t('services.ai.feature2'); } },
      { key: 'services.ai.feature3', get text() { return t('services.ai.feature3'); } },
      { key: 'services.ai.feature4', get text() { return t('services.ai.feature4'); } }
    ],
    color: 'secondary'
  },
];
