Ext.define('nomeapp.view.ContatosForm',{
    extend: 'Ext.form.Panel',
    requires:[
	'Ext.data.Store',
	'Ext.Toolbar',
        'Ext.XTemplate',
	'Ext.data.proxy.LocalStorage',
	'Ext.form.FieldSet',
	'Ext.MessageBox'
	
    ],
    alias: 'widget.contatosform',
    
    
    
    config:{
	
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		itemID: 'toolbarFormContato',
		title: 'editando contato',
		
		items: [
		    {
			xtype: 'button',
			ui:'back',
			action:'voltarContatosList',
			text:'Contatos'
		    }
		]
	    }
	    

	]
    }
    
});