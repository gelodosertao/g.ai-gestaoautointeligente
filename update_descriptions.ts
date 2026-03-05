import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://licetziylggxtnoutjkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpY2V0eml5bGdneHRub3V0amtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2ODQ2OTUsImV4cCI6MjA4MDI2MDY5NX0.olJiaq0HKZ3-DQlLjzBxodob9vaAxX2v9SaEmIRtO4w';
const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
    console.log('Updating descriptions...');

    const updates = [
        {
            category: 'Batidas',
            description: 'Feito com a fruta, leite condensado, destilado e gelo'
        },
        {
            category: 'Caipirinha',
            description: 'Feito com a fruta, cachaça, açucar e gelo'
        },
        {
            category: 'Caipiroska Premium',
            description: 'Feito com a fruta, Absolut e Licor 43, açucar e gelo'
        }
    ];

    for (const update of updates) {
        console.log(`Updating description for category: ${update.category}`);
        const { error } = await supabase
            .from('products')
            .update({ description: update.description })
            .eq('category', update.category);

        if (error) {
            console.error(`Error updating ${update.category}:`, error);
        } else {
            console.log(`Successfully updated ${update.category}`);
        }
    }

    console.log('Finished updating descriptions.');
}

run();
