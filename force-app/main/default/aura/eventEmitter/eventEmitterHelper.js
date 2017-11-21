({
	handleCmpEvent : function(component, event) {
		var componentName = component.getName().substr(1); // Removing the 'c' namespace prefix
        var phase = event.getPhase();
        console.log(componentName +' - event handled ('+ phase +')');
        
        var propagationToggle = component.find('propagationToggle').get('v.value');
        if (propagationToggle === 'stop-'+ phase) {
            console.log(componentName +' - stopping event propagation ('+ phase +')');
            event.stopPropagation();
        }
        else if (propagationToggle === 'pause-'+ phase) {
            console.log(componentName +' - pausing event propagation ('+ phase +')');
            event.pause();
            component.set('v.pausedCmpEvent', event);
        }
	},
    
    resumeEvent : function(component) {
        var event = component.get('v.pausedCmpEvent');
        console.log(component.getName().substr(1) +' - resuming event propagation ('+ event.getPhase() +')');
        event.resume();
        component.set('v.pausedCmpEvent', null);
	}
})