import 'i18next'

declare module 'i18next' {
  type CustomTypeOptions = {
    defaultNS: 'translation'
    resources: {
      translation: {
        description: string;
        about: string;
        courses: string;
        certifications: string;
        skills: string;
        contact: string;
        projects: string;
        experience: string;
        ViewonGitHub: string;
        DesProject: string;
      };
    };
  }
}