/**
 * @file mofron-event-common/index.js
 * @brief common event for mofron
 *        set addEventListener of target object
 *        it is possible to use addEventListener() for general by setting the parameter of the type method.
 * ## event function parameter
 *  - component: event target component object
 *  - object: event object of addEventListener
 *  - mixed: user specified parameter
 * @license MIT
 */
module.exports = class extends mofron.class.Event {
    /**
     * initialize common event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @short listener,type
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname("Common");
	    this.shortForm("listener", "type");
            /* init config */
            this.confmng().add("type", { type: "string" });
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
     * event type
     * 
     * @param (string) event type
     * @return (string) event type
     * @type parameter
     */
    type (prm) {
        try {
	    return this.confmng("type", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents
     * 
     * @param (mofron.class.Dom) event target dom
     * @type private
     */
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                this.type(),
                (e) => {
                    try {
		        evt_obj.execListener(e);
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
