/**
 * @file mofron-effect-dev/index.js
 * @author simpart
 */
const mf = require('mofron');

mf.effect.HrzCenter = class extends mf.Effect {
    
    constructor (po) {
        try {
            super();
            this.name('HrzCenter');
            this.prmMap(['rate', 'type']);
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            if ('relative' === this.type()) {
                cmp.adom().style({
                    position : this.type(),
                    left     : (100 - this.rate())/2 + '%'
                });
            } else {
                let set_style = {};
                set_style[this.type() + '-left'] =  (100 - this.rate())/2 + '%';
                cmp.adom().style(set_style);
            }
            cmp.width(this.rate() + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (prm) {
        try {
            let ret = this.member('rate', 'number', prm, 80);
            if ( (undefined !== prm) &&
                 ( (0 > prm) || (100 < prm))) {
                throw new Error('invalid parameter');
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * setter/getter center type
     *
     * @param p1 (string) center type
     * @param p1 (undefined) call as getter
     * @return (string) center type
     */
    type (prm) {
        try {
            return this.member('type', ['relative', 'margin', 'padding'], prm, 'relative');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.HrzCenter;
