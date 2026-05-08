// CTRH Phase 2: Ban factory gauges and physical assembler
// Priority: 1000 (runs early)

ItemEvents.modification(event => {
    // ========================================
    // BAN: Create factory gauges
    // ========================================
    const createGauges = [
        'create:stressometer',
        'create:speedometer', 
        'create:factory_gauge',
    ];
    
    createGauges.forEach(id => {
        event.modify(id, item => {
            item.setCraftingRemainder(null);
        });
        console.log(`[CTRH] Banned factory gauge: ${id}`);
    });
    
    // ========================================  
    // BAN: Create Aeronautics Physical Assembler
    // (Blocks must break into physical structures naturally)
    // ========================================
    const aeronauticsBans = [
        'create_aeronautics:physical_assembler',
    ];
    
    aeronauticsBans.forEach(id => {
        event.modify(id, item => {
            item.setCraftingRemainder(null);
        });
        console.log(`[CTRH] Banned: ${id}`);
    });
});

// Remove crafting recipes for banned items
ServerEvents.recipes(event => {
    event.remove({ output: 'create:stressometer' });
    event.remove({ output: 'create:speedometer' });
    event.remove({ output: 'create:factory_gauge' });
    event.remove({ output: 'create_aeronautics:physical_assembler' });
    
    console.log('[CTRH] Removed recipes for banned items');
});

console.log('[CTRH] Phase 2 bans loaded');
