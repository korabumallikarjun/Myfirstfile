({
	helperMethod : function(cmp,evt) {
        alert('yes Sir, I am your helper.Please let me know');
        var sName = cmp.get("v.stdName");
        alert('std Name = '+sName);
        var sFname= cmp.get("v.stdFatherName");
        alert('std Fathername = '+sFname);
        var sEmail=cmp.get("v.stdEmail");
        alert('std Email ='+sEmail)
        var sFees = cmp.get("v.stdFees");
        alert('std Fees = '+sFees);
        
        var action =cmp.get('c.insertEmpDetails');
        
        action.setParams({
            "snm":sName,
            "sfnm":eFname,
            "sEmail":sEmail,
            "sFees":sFees,
    
        }
        );
        
        action.setCallback(this,function(a){
        var state= a.getState();
        if(state=='SUCCESS'){
             alert('Record Inserted Successfully....');
           }
           });
       $A.enqueueAction(action);
	}
})