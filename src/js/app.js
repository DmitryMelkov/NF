import * as flsFunctions from './modules/functionsWebP.js';
import { ourPartnersSwiper } from './modules/our-partners.js';
import { cookie } from './modules/cookie.js';
import { smooth } from './modules/smooth-scroll.js';
import { course } from './modules/course.js';
import { buble } from './modules/buble.js';
import { courseSwiper } from './modules/courseSwiper.js';
import { courseBodySwiper } from './modules/courseBodySwiper.js';

import { listCollections } from './modules/list-collections.js';
import { aboutSwiper } from './modules/aboutSwiper.js';
import { partnershipsSwiper } from './modules/partnershipsSwiper.js';
import { nameCollections } from './modules/name-collections.js';
import { copy } from './modules/copy.js';

flsFunctions.isWeb();
ourPartnersSwiper();
cookie();
smooth();
course();
buble();
courseSwiper();
courseBodySwiper();

listCollections();
nameCollections();
aboutSwiper();
copy();
partnershipsSwiper();
