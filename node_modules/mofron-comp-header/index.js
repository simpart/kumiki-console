/**
 * @file   mofron-comp-header/index.js
 * @brief  header component for mofron
 *         This component for placing at the top of the page etc. and displaying the site title etc.
 * @feature A header's child components are placed horizontally since header has a horizon layout.
 * @attention it maybe needs a 'false' config at bind parameter that used as a child component.
 * @license MIT
 */
const Horizon = require('mofron-layout-horizon');
const cmputl  = mofron.util.component;

module.exports = class extends mofron.class.Component {
    /**
     * constructor
     * 
     * @param (mixed) child parameter
     *                key-value: component config
     * @type private
     */
    constructor (prm) {
        try {
            super();
	    /* init config */
            this.modname("Header");
	    this.confmng().add("wrap", { type: "Dom" });
            
            if (undefined !== prm) {
                this.config(prm);
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
            super.initDomConts();
	    let wrap = new mofron.class.Component();
	    this.child(wrap);
	    this.childDom(wrap.childDom());
            
	    let pvt = { private:true };
            this.layout(new Horizon(),pvt);
            
            this.style({
                "border-bottom-style" : "solid",
                "border-bottom-width" : "0.01rem"
            }, pvt);
            
            this.width("100%",pvt);
	    this.height("0.5rem",pvt);
            this.bind(true);
            this.mainColor([211,211,211],pvt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * header height
     * 
     * @param (string (size)) header height (default is "0.5rem")
     * @param (option) style option
     * @return (string (size)) header height
     * @type parameter
     */
    height (val, opt) {
        try {
            if (undefined === val) {
                return this.rootDom()[0].style("height");
            }
	    this.rootDom()[0].style({ height : val }, opt);
	    this.getTree().getChild()[0].height(val,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * binding header 
     * 
     * @param (boolean) true: header position is fixed. display header even if user scrolls. (default)
     *                  false: header position is not fixed.
     * @return (boolean) binding config
     * @type parameter
     */
    bind (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return ('fixed' === this.style('position')) ? true : false;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            
            if (true === flg) {
                this.style({ 'position': 'fixed', 'z-index': 999 });
            } else {
                this.style(
                    { position : null },
                    ('fixed' === this.style('position')) ? false : true
                );
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border bottom color
     *
     * @param (mixed (color)) string: border bottom color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (key-value) stye option
     * @return (string) border bottom color
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
            return cmputl.color(this, "border-bottom-color", prm, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
