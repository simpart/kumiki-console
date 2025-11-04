/**
 * @file mofron-effect-fade/index.js
 * @brief fade effect for mofron
 * @author simpart
 */
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Effect {
    /**
     * initialize fade effect
     * 
     * @param (mixed) boolean: value parameter
     *                object: effect config
     * @param (number) speed parameter
     * @short value,speed
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.modname('Fade');
            
            this.confmng().add("value", { type: "boolean", init: true });
	    this.shortForm("value", "speed");

            /* init config */
            this.speed(700);
	    this.eid(0);
	    this.transition("opacity");
            
            /* opacity setting */
            this.beforeEvent(
                (bf_eff) => {
                    try {
		        let stval = { 'opacity' : (true === bf_eff.value()) ? 0 : 1 };
		        cmputl.rstyle(bf_eff.component(), stval);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );
            
	    if (0 < arguments.length) {
                this.config(p1,p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @param (component) effect target component object
     * @type private
     */
    contents (cmp) {
        try {
	    cmputl.rstyle(
	        cmp,
	        { 'opacity' : (true === this.value()) ? 1 : 0 }
	    );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * fade type value
     * 
     * @param (boolean) true: fade-in effect
     *                  false: fade-out effect
     * @return (boolean) fade type
     * @type parameter
     */
    value (prm) {
        try {
	    if ((false === prm) && (0 === this.eid())) {
                this.eid(1);
	    }
	    return this.confmng("value", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
