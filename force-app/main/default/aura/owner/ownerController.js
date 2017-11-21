({
    handleCmpEventBubble : function(component, event, helper) {       
        helper.handleCmpEvent(component, event);
    },
    
    handleCmpEventCapture : function(component, event, helper) {
        helper.handleCmpEvent(component, event);
    },
    
    onResumeCmpEvent : function(component, event, helper) {
        helper.resumeEvent(component);
    }
})