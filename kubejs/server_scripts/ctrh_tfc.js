// CTRH Phase 4: TerraFirmaCraft Compatibility
// Create + TFC hardcore integration

// Priority: 200

ServerEvents.recipes(event => {
    
    // ============================================
    // TFC Metal -> Create Component Bridge
    // Use TFC metals to craft Create components
    // ============================================
    
    // Andesite Alloy from TFC Andesite
    event.shapeless('create:andesite_alloy', [
        'tfc:rock/andesite',
        'tfc:rock/andesite', 
        'minecraft:iron_nugget'
    ]).id('ctrh:tfc_andesite_alloy');

    // Iron Sheet from TFC Wrought Iron
    event.recipes.create.pressing(
        'create:iron_sheet',
        'tfc:metal/ingot/wrought_iron'
    ).id('ctrh:tfc_wrought_iron_sheet');

    // Brass from TFC Copper + Zinc
    event.recipes.create.mixing(
        '2x create:brass_ingot',
        [
            'tfc:metal/ingot/copper',
            'create:zinc_ingot'
        ]
    ).heated().id('ctrh:tfc_brass_mixing');

    // ============================================
    // TFC Processing via Create
    // Automate TFC's manual processes
    // ============================================
    
    // Mechanical Knapping (Create press -> TFC knapping)
    event.recipes.create.pressing(
        'tfc:rock/andesite',
        'tfc:rock/raw/andesite'
    ).id('ctrh:mechanical_rock_breaking');

    // Automated Bloomery (Create mixing)
    event.recipes.create.mixing(
        'tfc:metal/ingot/wrought_iron',
        [
            'tfc:ore/small/hematite',
            'tfc:ore/small/hematite',
            '#tfc:charcoal'
        ]
    ).heated().id('ctrh:automated_bloomery');

    // ============================================
    // Create: New Age Power for TFC Machines
    // ============================================
    
    // Electric heating for TFC forge (replaces charcoal)
    event.shaped(
        'create_new_age:heater',
        [
            'CCC',
            'CGC',
            'CCC'
        ],
        {
            C: 'create_new_age:copper_circuit',
            G: 'create_new_age:generator_coil'
        }
    ).id('ctrh:electric_forge_heater');

    console.log('[CTRH] Phase 4 TFC compatibility loaded');
});

// ============================================
// TFC WorldGen Compatibility
// ============================================

// Allow Create ores to spawn in TFC rock layers
// This is handled via datapack in kubejs/data/

console.log('[CTRH] Phase 4 framework initialized');
