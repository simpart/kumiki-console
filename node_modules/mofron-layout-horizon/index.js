/**
 * @file mofron-layout-horizon/index.js
 * @brief horizon layout for mofron
 *        target component of children is positioned horizontally.
 * @license MIT
 */
module.exports = class extends mofron.class.Layout {
    /**
     * initialize layout
     * 
     * @type private
     */
    constructor () {
        try {
            super();
            this.modname('Horizon');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    /**
     * set horizon style
     *
     * @type private
     */
    execute () {
        try {
            this.component().style({
                'display' : '-webkit-flex',
                'display' : 'flex'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
