/**
 * @file mofron-event-click/index.js
 * @brief click event for mofron component
 *        it executes an event function when the component is clicked
 * ## event function parameter
 *  - component: event target component object
 *  - object: MouseEvent object of addEventListener
 *  - mixed: user specified parameter
 * @license MIT
 */
const Common = require("mofron-event-common");

module.exports = class extends Common {
    /**
     * initialize click event
     * 
     * @param (mixed) listener parameter
     *                key-value: event config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname("Click");
            this.shortForm("listener");
	    /* init config */
            this.confmng().add("pointer", { type: "boolean", init: true });
            this.type("click");
	    /* set config */
	    if (undefined !== prm) {
	        this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * add click event to target component.
     * 
     * @param (component) event target component
     * @type private
     */
    contents (tgt) {
        try {
            super.contents(tgt);
            if (true === this.pointer()) {
                this.component().style(
		    { 'cursor' : 'pointer' },
		    { passive: true }
		);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * mouse cursor style
     *
     * @param (boolean) true: mouse-in cursor is pointer [default]
     *                  false: mouse-in coursor is default
     * @return (boolean) mouse-in cursor style
     * @type parameter
     */
    pointer (flg) {
        try {
	    return this.confmng("pointer", flg);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
