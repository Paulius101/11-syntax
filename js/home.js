// IMPORT
import { dalyba } from './components/algebra/dalyba.js';
import { kvadratu } from './components/algebra/kvadratu.js';
import { sandauga } from './components/algebra/sandauga.js';
import { skirtumas } from './components/algebra/skirtumas.js';
import { suma } from './components/algebra/suma.js';
import { vidurkis } from './components/algebra/vidurkis.js';

// EXECUTION

const a = suma(8, 5);
console.log(a);

const b = skirtumas(8, 5);
console.log(b);

const c = sandauga(8, 5);
console.log(c);

const d = dalyba(8, 5);
console.log(d);

const e = kvadratu(5);
console.log(e);

const f = vidurkis([10, 8]);
console.log(f);