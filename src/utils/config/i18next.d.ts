import 'i18next'

declare module 'i18next' {
  type CustomTypeOptions = {
    defaultNS: 'translation'
    resources: {
      translation: {
        welcome: string;
        description: string;
        about: string;
        courses: string;
        certifications: string;
        skills: string;
        contact: string;
      };
    };
  }
}