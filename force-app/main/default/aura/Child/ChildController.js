({
	fireEvent : function(cmp, evt, hpr) {
		alert("Yes, I get Called...");
        var e = cmp.getEvent("myEvt");
        e.setParams({"myText":"Last Class for Aura"});
        e.fire();
	}
})