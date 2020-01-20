import 'regenerator-runtime/runtime';

import chai from 'chai';
import chaiExclude from 'chai-exclude';

// Configure chai to utilize chai exclusions. 
// That way we can exclude certain properties from our object deep equality assertions.
chai.use(chaiExclude);