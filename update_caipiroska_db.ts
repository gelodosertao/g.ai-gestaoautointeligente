import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://licetziylggxtnoutjkn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpY2V0eml5bGdneHRub3V0amtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2ODQ2OTUsImV4cCI6MjA4MDI2MDY5NX0.olJiaq0HKZ3-DQlLjzBxodob9vaAxX2v9SaEmIRtO4w';
const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
    console.log('Fetching Caipirinhas Premium...');

    const { data: products, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'Caipirinhas Premium');

    if (error) {
        console.error('Error fetching:', error);
        return;
    }

    if (!products || products.length === 0) {
        console.log('No products found with category "Caipirinhas Premium".');
        return;
    }

    for (const product of products) {
        const oldName = product.name;
        // Replace CAIPIRINHA with CAIPIROSKA (case-insensitive replace using regex)
        let newName = oldName.replace(/CAIPIRINHA/i, 'CAIPIROSKA');
        // Handle name if it was somehow lower case
        if (newName === oldName) {
            newName = oldName.replace(/Caipirinha/, 'Caipiroska');
        }

        console.log(`Updating: ${oldName} -> ${newName}`);

        const { error: updateError } = await supabase
            .from('products')
            .update({
                category: 'Caipiroska Premium',
                name: newName
            })
            .eq('id', product.id);

        if (updateError) {
            console.error(`Failed to update ${product.id}`, updateError);
        } else {
            console.log(`Successfully updated ${product.id}`);
        }
    }
    console.log('Done!');
}

run();
