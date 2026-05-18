/**
 * @file mofron-event-mouseout/index.js
 * @brief mouse-out event for mofron
 *        this event notifies when the mouse out on the component.
 * ## event function parameter
 *  - component: event target component object
 *  - event: "mouseout" event object by addEventListener
 *  - mixed: user specified parameter
 * @license MIT
 */

module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('MouseOut');
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * event contents
     * 
     * @param (mofron.class.dom) target dom object
     * @type private
     */
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                'mouseout',
                () => { 
                    try {
		        evt_obj.execListener();
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
