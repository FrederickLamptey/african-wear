import supabase, { supabaseUrl } from './supabase';

export async function getInventory() {
  const { data, error } = await supabase.from('inventory').select('*');

  if (error) {
    console.error(error);
    throw new Error('Inventory could not be loaded');
  }

  return data;
}

export async function createInventory(newInventory) {
  const imageName = `${Math.random()}-${newInventory.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/inventory-images//${imageName}`;
  //https://zwtxzfvoordeefpkxigr.supabase.co/storage/v1/object/public/inventory-images//dinero-kaftan-2.jpg

  //create cabin
  const { data, error } = await supabase
    .from('inventory')
    .insert([{ ...newInventory, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error('Inventory could not be created!');
  }

  //Upload image to database
  const { error: storageError } = await supabase.storage
    .from('inventory-images')
    .upload(imageName, newInventory.image);

  //Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from('inventory').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Item image could not be uploaded and hence, the item was not created!'
    );
  }

  return data;
}

export async function deleteInventory(id) {
  const { data, error } = await supabase
    .from('inventory')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Inventory could not be deleted!');
  }
  return data;
}
