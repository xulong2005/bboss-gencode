var ComponentsDropdowns = function () {

     
    

    return {
    
    	loadtables:function(event,targetE)
    	{
    		 Metronic.startPageLoading();
    		var dbname = $(event.currentTarget).val();
    		$.ajax({
                type: "POST",
                cache: false,
                url: "loadtables.page",
                data:{dbname:dbname},
                dataType: "json",
                success: function (tables) {
                	 Metronic.stopPageLoading();
                	 var hcontent = "";
                	 for(var table in tables)
                	{
                		 hcontent = hcontent+"<option value='"+tables[table]+"'>"+tables[table]+"</option>";
                	}
                    $("#"+targetE).html(hcontent);
                    
                },
                error: function (xhr, ajaxOptions, thrownError) {
                	 alert(thrownError);
                	Metronic.stopPageLoading();
                },
                async: false
            });
    	},
    	loadtablesofdbname:function(dbname)
    	{
    		 
    		 
    		$.ajax({
                type: "POST",
                cache: false,
                url: "loadtables.page",
                data:{dbname:dbname},
                dataType: "json",
                success: function (tables) {
                	 
                	 var hcontent = "";
                	 for(var table in tables)
                	{
                		 hcontent = hcontent+"<option value='"+tables[table]+"'>"+tables[table]+"</option>";
                	}
                    $("#tableName").html(hcontent);
                    
                },
                error: function (xhr, ajaxOptions, thrownError) {
                	 alert(thrownError);
                	 
                },
                async: false
            });
    	},
	    loadds:function(event,targetE)
		{
			 Metronic.startPageLoading();
			
			$.ajax({
	            type: "POST",
	            cache: false,
	            url: "loadds.page",
	            data:{},
	            dataType: "json",
	            success: function (dses) {
	            	 Metronic.stopPageLoading();
	            	 var hcontent = "";
	            	 var dbname = "";
	            	 for(var ds in dses)
	            	{
	            		 if(dbname == '')
	            			 dbname = dses[ds].dbname;
	            		 hcontent = hcontent+"<option value='"+dses[ds].dbname+"'>"+dses[ds].dbname+"</option>";
	            		 
	            	}
	            	 
	                $("#"+targetE).html(hcontent);
	                ComponentsDropdowns.loadtablesofdbname(dbname)
	                
	            },
	            error: function (xhr, ajaxOptions, thrownError) {
	            	 alert(thrownError);
	            	Metronic.stopPageLoading();
	            },
	            async: false
	        });
			
			
		}
        
    };

}();