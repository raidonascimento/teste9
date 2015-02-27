Ext.Loader.setConfig({
	enabled: true
    
});
Ext.application({
    
    name : 'touchdemo',

    requires: [
	'Ext.field.Search'
    ],
    controllers: [
	'Main'
    ],
    views: [

    ],
    
    models:[

    ],

    stores:[

    ],
    viewport:{
	layout:{
	    type:'card',
	    animation:  {
		type:'slide'
	    }
	}
    },
    
    launch: function(){

	
    }
    
    
});