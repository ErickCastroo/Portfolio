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
        titleexp1: string;
        fechaexp1: string;
        puntoexp1: string;
        titleexp2: string;
        fechaexp2: string;
      };
    };
  }
}