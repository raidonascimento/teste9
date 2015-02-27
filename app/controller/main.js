

Ext.define('nomeapp.controller.Main',{
    requires:[
	'Ext.MessageBox'
	
    ],

    extend: 'Ext.app.Controller',
    
	config:{
	    
	    routes: {
		'': 'showContatosList',
		'index.html': 'showContatosList'
	    },
	    refs: {
	    contatosList: {
		xtype: 'contatoslist',
		selector: 'contatoslist',
		autoCreate: true
	    },
	    contatosForm: {
		xtype: 'contatosform',
		selector: 'contatosform',
		autoCreate: true
	    }
	},
	    control:{
		'button[action = mudarPainel1]':{
		tap: 'showContatosList'
		},
		'button[action = novoContato]':{
		tap: 'showContatosForm'
		}
		,
		'button[action = voltarContatosList]':{
		tap: 'showContatosList'
		},
		
		
		contatosList: {
		    itemtap:'showContatosForm'
		}
	}
	
	
    },
     showContatosList: function () {
	Ext.Viewport.setActiveItem(this.getContatosList());
    }

    
    
    
    
});
