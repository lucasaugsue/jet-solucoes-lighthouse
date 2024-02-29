// fontAwesomeConfig.tsx
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

type Icon = IconDefinition;

library.add(faStar, faStarHalfAlt);
