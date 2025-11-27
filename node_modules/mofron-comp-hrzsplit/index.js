/**
 * @file mofron-comp-hrzsplit/index.js
 * @brief horizon split component
 * @license MIT
 */
const evDrag  = require("mofron-event-drag");
const comutl  = mofron.util.common;
const ConfArg = mofron.class.ConfArg;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("HrzSplit");
	    this.shortForm("ratio");
            
	    /* init config */
            this.confmng().add("ratio", { type:'array' })
            
	    if (0 < arguments.length) {
                this.config(p1);
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
            let border = new mofron.class.Component({
	                     size: new ConfArg("100%","0.1rem"),
			     style: {
				 'display':     'flex',
				 'align-items': 'center',
				 'cursor':      'ns-resize',
				 'margin-top':  '0.2rem'
                             },
			     child: new mofron.class.Component({
                                        size: new ConfArg("100%","0.01rem"),
					baseColor: [180,180,180]
			            })
			 });
            let b_wrap = new mofron.class.Component({
                             event: new evDrag(new ConfArg(this.dragEvent, this)),
                             size: new ConfArg("100%","0.5rem"),
                             style: {
                                 'display':     'fixed',
                                 'position':    'absolute',
                             },
                             child: border
                         });
            this.child(b_wrap);

        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    afterRender () {
        try {
	    let split   = this;
            let upd_hei = (cmp, r) => {
                try {
		    if (split.height() === undefined) {
                        throw Error('unset height');
		    }
                    let siz_hei = comutl.getsize(split.height());
		    siz_hei.value(siz_hei.value()*(r/100));
                    cmp.height(siz_hei.toString());
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            let chd = this.child();
	    let rat = this.ratio();
            
	    upd_hei(chd[1], rat[0]);
	    upd_hei(chd[2], rat[1]);
            
	    chd[0].style({
	        'top': comutl.sizesum(chd[1].height(), '25px')
            });
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    offset () {}

    dragEvent (p1,p2,p3) {
        try {
            let chd = p3.child();
	    chd[0].style({
                'top': (p2.pageY-25) + 'px'
	    });
            
	    chd[1].height((p2.pageY-50)+"px");
	    chd[2].height(comutl.sizediff(p3.height(),(p2.pageY-50)+"px"));
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    ratio (p1,p2) {
        try {
            if (undefined === p1) {
                return this.confmng("ratio");
	    }
	    this.confmng("ratio",[p1,p2]);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    
    
}
/* end of file */
