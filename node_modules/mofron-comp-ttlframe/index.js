/**
 * @file mofron-comp-ttlframe/index.js
 * @brief title frame component
 * @author simpart
 */
const Frame  = require('mofron-comp-frame');
const Header = require('mofron-comp-txtheader');

module.exports = class extends Frame {
    /**
     * initialize component
     * 
     * @param (mixed) text paramter
     *                object: component option
     * @param (component) child parameter
     * @pmap text,child
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.name('TtlFrame');
            this.shortForm('text','child');
            
	    if (0 < arguments.length) {
                this.config(p1, p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private 
     */
    initDomConts () {
        try {
	    this.header(new Header({ height: "0.4rem" }));
            super.initDomConts();
            this.child(this.header());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * header component
     * 
     * @param (mofron-comp-txtheader) header component
     * @return (mofron-comp-txtheader) header component
     * @type parameter
     */
    header (prm) {
        try {
	    if (undefined !== prm) {
	        prm.config({ bind : false });
	    }
            return this.innerComp('header', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * title text contents
     * 
     * @param (mixed) string: title text
     *                mofron-comp-text: text component
     * @param (dict) text config
     * @return (mofron-comp-text) text component
     * @type parameter
     */
    text (prm, cnf) {
        try {
	    return this.header().text(prm, cnf);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * title text contents
     * same as text parameter
     * 
     * @param (mixed) string: title text
     *                mofron-comp-text: text component
     * @param (string (size)) margin left size
     * @return (mofron-comp-text) text component
     * @type parameter
     */
    title (prm, lft) {
        try {
	    return this.text(prm, { style: { "margin-left" : lft } });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * header background color
     * 
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (option) style option
     * @return (string) header background color
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
	    return this.header().baseColor(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
