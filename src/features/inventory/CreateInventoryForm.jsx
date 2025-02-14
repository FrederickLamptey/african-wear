import styled from 'styled-components';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createInventory } from '../../services/apiInventory';
import toast from 'react-hot-toast';

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateInventoryForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  //get errors from the formState
  const { errors } = formState;
  console.log(errors)

  //call react query client
  const queryClient = useQueryClient();

  //create inventory in the database
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createInventory,
    onSuccess: () => {
      toast.success('New inventory successfully created');
      queryClient.invalidateQueries({
        queryKey: ['inventory'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  //function to be called if there are not errors in the form data
  function onSubmit(data) {
    mutate(data);
  }

  //error function to be called if there is an error in the form 
  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="name">Item name</Label>
        <Input
          type="text"
          disabled={isCreating}
          id="name"
          {...register('name', {
            required: 'This field is required',
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="department">Department</Label>
        <Input
          type="text"
          disabled={isCreating}
          id="department"
          {...register('department', {
            required: 'This field is required',
            validate: (value) =>
              value === 'male' ||
              'The department of the item should at least be in the male department!',
          })}
        />
        {errors?.department?.message && (
          <Error>{errors.department.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          disabled={isCreating}
          id="regularPrice"
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Price should be at least 1',
            },
          })}
        />
        {errors?.regularPrice?.message && (
          <Error>{errors.regularPrice.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          disabled={isCreating}
          id="discount"
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Discount should be less than the regualar price!',
          })}
        />
        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description of Item</Label>
        <Textarea
          type="number"
          disabled={isCreating}
          id="description"
          defaultValue=""
          {...register('description', {
            required: 'This field is required',
          })}
        />
        {errors?.description?.message && (
          <Error>{errors.description.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add item</Button>
      </FormRow>
    </Form>
  );
}

export default CreateInventoryForm;
