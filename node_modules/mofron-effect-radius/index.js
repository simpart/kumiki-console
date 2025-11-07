/**
 * @file mofron-effect-radius/index.js
 * @brief radius effect for mofron
 *        this effect makes the components of outside rounded style
 * @license MIT
 */

module.exports = class extends mofron.class.Effect {
    /**
     * initialize radius effect
     *
     * @param (mixed) value parameter
     *                key-value: effect config
     * @short value
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('Radius');
            this.shortForm('value');
            
            /* init config */
            this.confmng().add("value", { type: "size", init: "0.5rem" });
	    this.confmng().add(
	        "position",
		{ type:'string', list: true, select: ["top-left","top-right","bottom-left","bottom-right"] }
	    );
            
            this.transition([
                "border-radius", "border-top-left-radius",
                "border-top-right-radius","border-bottom-left-radius",
                "border-bottom-right-radius"
            ]);
            
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * radius size
     *
     * @param (string (size)) radius size
     * @return (string (size)) radius size
     * @type parameter
     */
    value (prm) {
        try {
	    return this.confmng("value", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * radius target position
     * each position will be targeted if nothing is set 
     * 
     * @param (mixed) array: position list
     *                string: target position ("top-left","top-right","bottom-left","bottom-right")
     * @return (array) position list
     * @type parameter
     */
    position (prm) {
        try {
	    return this.confmng('position', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @param (component) target component
     * @type private
     */
    contents (cmp) {
        try {
            let pos = this.position();
            let val  = this.value().toString();
            if (0 === pos.length) {
                cmp.style({ 'border-radius' : val}, { bpref:true });
            } else {
                let set_sty = {};
                for (let tidx in pos) {
                    set_sty['border-' + pos[tidx] + '-radius'] = val;
                }
                cmp.style(set_sty, { bpref:true });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
