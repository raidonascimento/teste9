Ext.define('nomeapp.view.ContatosList', {
    extend: 'Ext.dataview.List',
    requires: [
	'Ext.Toolbar',
	'Ext.field.Text'
    ],
    alias: 'widget.contatoslist',

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
			action:'mudarPainel1',
			text:'Contatos'
		    }
		]
	    }
	    

	]
    }
});