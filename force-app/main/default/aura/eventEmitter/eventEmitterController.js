({
    handleCmpEventBubble : function(component, event, helper) {       
        helper.handleCmpEvent(component, event);
    },
    
    handleCmpEventCapture : function(component, event, helper) {
        helper.handleCmpEvent(component, event);
    },
    
    onResumeCmpEvent : function(component, event, helper) {
        helper.resumeEvent(component);
    },
    
	fireEvent : function(component, event, helper) {
        console.log('');
        console.log(component.getName().substr(1) +' - firing event');
        var myEvent = component.getEvent("cmpEvent");
        myEvent.fire();
	}
})