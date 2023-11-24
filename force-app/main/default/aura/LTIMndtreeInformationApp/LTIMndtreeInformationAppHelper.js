({
	helperMethod : function(cmp,evt) {
        alert('yes Sir, I am your helper.Please let me know');
        var eName = cmp.get("v.empName");
        alert('Emp Name = '+eName);
        var eFame = cmp.get("v.empFatherName");
        alert('Emp FName = '+eFname);
        var eAddress = cmp.get("v.empAddress");
        alert('Emp Address = '+eAddress);
        var eDept = cmp.get("v.empDept");
        alert('Emp Dept = '+eDept);
        var eSalary = cmp.get("v.empSalary");
        alert('Emp Salary = '+eSalary);
        
        var action =cmp.get('c.insertEmpDetails');
        
        action.setParams({
            "enm":eName,
            "efnm":eFname,
            "eaddr":eAddress,
            "edpt":eDept,
            "esal":eSalary
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