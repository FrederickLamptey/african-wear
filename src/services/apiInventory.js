import supabase, { supabaseUrl } from './supabase';

export async function getInventory() {
  const { data, error } = await supabase.from('inventory').select('*');

  if (error) {
    console.error(error);
    throw new Error('Inventory could not be loaded');
  }

  return data;
}

export async function createEditInventory(newInventory, id) {
  console.log(newInventory, id)
  //checking if the updated image has the file path required in order to uploaded
  const hasImagePath = newInventory.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newInventory.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newInventory.image
    : `${supabaseUrl}/storage/v1/object/public/inventory-images//${imageName}`;
  //https://zwtxzfvoordeefpkxigr.supabase.co/storage/v1/object/public/inventory-images//dinero-kaftan-2.jpg

  //1. create/edit item
  let query = supabase.from('inventory');

  //A) CREATE
  if (!id) query = query.insert([{ ...newInventory, image: imagePath }]);

  //B) EDIT
  if (id) query = query.update({ ...newInventory, image: imagePath }).eq('id', id);
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Inventory could not be created!');
  }

  //Upload image to database
  const { error: storageError } = await supabase.storage
    .from('inventory-images')
    .upload(imageName, newInventory.image);

  //Delete the item if there was an error uploading image
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
