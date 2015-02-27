
Ext.Loader.setConfig({
    enabled: true
    
});
Ext.application({ 

     name: 'nomeapp', 

    views: [
    'ContatosList',
    'ContatosForm'
    ],
    models:[
	
    ],
    controllers:[
	
    ],
    stores:[
	
    ],
    viewport: {
	layout:{
	    type:'card',
	    animation:{
		type:'slide'
	    }
	}
    },
    launch: function(){
	Ext.Viewport.add(
		{
		    	fullscreen : true,

		    html: 'painel1',
		    items:[
			{
			    cocked:'top',
			    xtype:'toolbar',
			    ui:'light',
			    items:[
				{
				text:'ir para painel 2',
				listeners : {
					tap: function(){
					    Ext.Viewport.setActiveItem(1);
					}
			    }
				}
			    ]
			}
		    ]
		},
		{
		    html: 'painel2',
		    	    items:[
			{
			    cocked:'top',
			    xtype:'toolbar',
			    ui:'light',
			    items:[
				{
				text:'ir para painel 1',
				ui: 'back',
				listeners : {
					tap: function(){
					    Ext.Viewport.setActiveItem(0);
					}
			    }
				}
			    ]
			}
		    ]
		});
	
    }
		
});


