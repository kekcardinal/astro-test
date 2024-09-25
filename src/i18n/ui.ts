export const showDefaultLang = false;

export const languages = {

    fr: 'FR',
    en: 'EN',
  };
  
  export const defaultLang = 'fr';
  
  export const ui = {
    en: {
        'nav.a-propos': 'About',
        'nav.alarme': 'Fire alarm', 
        'nav.assc': 'Ups',
        'nav.contact':'Contact',
        'nav.emplois':'Careers',
      'nav.home': 'index',
      'nav.projets':'Projects',
    
    },
    fr: {
        'nav.a-propos': 'À propos',
        'nav.alarme': 'Alarme incendie', 
        'nav.assc': 'Assc',
        'nav.contact':'Contact',
        'nav.emplois':'Emplois',
      'nav.home': 'Index',
      'nav.projets':'Projets',
    },
  } as const;


  export const routes = {
    fr: {
        'index': 'index',
        'a-propos': 'a-propos',
        'alarme': 'alarme',
        'assc': 'assc',
        'contact':'contact',
        'emplois':'emplois',
        'projets':'projets'
    },
    en: {
        'index': 'index',
        'a-propos': 'about',
        'alarme': 'alarm',
        'assc': 'ups',
        'contact':'contact',
        'emplois':'careers',
        'projets':'projects'
    },
  
}