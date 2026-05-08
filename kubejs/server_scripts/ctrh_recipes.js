// CTRH Phase 3: Recipe Rewriting Framework
// Style: "The Long Road" - extended production chains
// Chemistry: approximate with Create mixing/heating (Destroy not on 1.21.1)
// Power: Create: New Age electrical grid integration

// Priority: 500 (runs after bans)

ServerEvents.recipes(event => {
    
    // ============================================
    // EXAMPLE: Extended chemical processing chain
    // Limestone -> Quicklime -> Slaked Lime -> Chemical products
    // ============================================
    
    // Override Quicklime: requires Bulk Blasting (not just smelting)
    event.shapeless('create:limestone', ['minecraft:calcite', 'minecraft:gravel'])
        .id('ctrh:limestone_synthesis');
    
    // Quicklime: Crushing limestone (mechanical processing)
    event.recipes.create.crushing(
        ['2x minecraft:bone_meal', Item.of('minecraft:bone_meal').withChance(0.5)],
        'minecraft:calcite'
    ).id('ctrh:calcite_crushing');

    // ============================================
    // New Age Power Integration
    // Connect Create rotational power to electrical grid
    // ============================================
    
    // Motor requires precision mechanism (longer chain)
    event.remove({ output: 'create_new_age:basic_motor' });
    event.shaped(
        'create_new_age:basic_motor',
        [
            ' C ',
            'CMC',
            ' I '
        ],
        {
            C: 'create_new_age:copper_circuit',
            M: 'create:precision_mechanism',
            I: 'create:iron_sheet'
        }
    ).id('ctrh:basic_motor_extended');

    // Generator coil requires brass + electron tube
    event.remove({ output: 'create_new_age:generator_coil' });
    event.shaped(
        'create_new_age:generator_coil',
        [
            ' E ',
            'CBC',
            ' E '
        ],
        {
            E: 'create_new_age:electrical_connector',
            C: 'create:brass_casing',
            B: 'create:brass_ingot'
        }
    ).id('ctrh:generator_coil_extended');

    // ============================================
    // Intermediates for "Long Road" philosophy
    // ============================================
    
    // Copper coil: requires crushing + washing + pressing chain
    event.recipes.create.pressing(
        'create_new_age:copper_circuit',
        'create:copper_sheet'
    ).id('ctrh:copper_circuit_pressing');

    // ============================================
    // TFC-style smelting chain preparations
    // ============================================
    
    // Iron processing: Bloom -> Wrought Iron -> Steel
    event.blasting('minecraft:iron_ingot', 'minecraft:raw_iron_block')
        .id('ctrh:iron_bloom_blasting');

    // Steel: requires coal coke (from TFMG)
    event.remove({ output: 'create:railway_casing' });
    event.shaped(
        '2x create:railway_casing',
        [
            'SSS',
            'SAS',
            'SSS'
        ],
        {
            S: '#forge:ingots/steel',
            A: 'create:andesite_alloy'
        }
    ).id('ctrh:railway_casing_steel');

    // ============================================
    // Chemical processing: Mixing + Heating chain
    // ============================================
    
    // Create: Garnished integration - chemical dyes
    event.recipes.create.mixing(
        '2x minecraft:red_dye',
        [
            'minecraft:redstone',
            Fluid.of('minecraft:water', 250)
        ]
    ).heated().id('ctrh:chemical_red_dye');

    // Salt processing (preparation for future Destroy port)
    event.recipes.create.mixing(
        '4x create:zinc_nugget',
        [
            '2x create:crushed_raw_zinc',
            Fluid.of('minecraft:water', 500)
        ]
    ).heated().id('ctrh:zinc_chemical_leaching');

    console.log('[CTRH] Phase 3 recipes loaded');
});

console.log('[CTRH] Phase 3 framework initialized');
