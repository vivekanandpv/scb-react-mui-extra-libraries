import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import TextField from '@mui/material/TextField';
import AppDatePicker from './AppDatePicker';
import { isWithinRange } from './date-utils';
import toast, { Toaster } from 'react-hot-toast';

const SampleForm = (props) => {
  const notify = (state, message) =>
    toast[state](message, {
      duration: 1500,
    });
  const { register, control, handleSubmit, reset, formState, setValue } =
    useForm({
      defaultValues: {
        fullName: '',
        age: null,
        dateOfJoining: '',
        newsletter: false,
        language: 'en',
        rating: 'good',
        comments: '',
      },
      mode: 'onSubmit',
    });

  const {
    isSubmitSuccessful,
    isSubmitting,
    isSubmitted,
    errors,
    dirtyFields,
    touchedFields,
  } = formState;

  const submit = (data) => {
    console.log('form submitted', data);
    notify('success', 'Form submitted successfully');
  };

  const submissionError = (errors) => {
    console.log('submission errors', errors);
    notify('error', 'Form is invalid');
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <h4>Sample Registration Form</h4>
      <form noValidate onSubmit={handleSubmit(submit, submissionError)}>
        <div className='from-group mb-3'>
          <div>
            <TextField
              id='outlined-basic'
              label='Full name'
              variant='outlined'
              className='w-100'
              error={errors.fullName?.message}
              helperText={errors.fullName?.message}
              {...register('fullName', {
                required: 'Full name of the user is required',
                validate: {
                  lettersOnly: (fv) => {
                    const regex = /^[A-Za-z ]*$/;
                    return regex.test(fv) || 'Full name should only be letters';
                  },
                },
              })}
            />
          </div>
        </div>

        <div className='from-group mb-3'>
          <TextField
            id='outlined-basic'
            label='Age'
            variant='outlined'
            className='w-100'
            error={errors.age?.message}
            helperText={errors.age?.message}
            {...register('age', {
              required: 'Age of the user is required',
              validate: {
                numbersOnly: (fv) => {
                  const regex = /^[1-9][0-9]?$|^100$/;
                  return regex.test(fv) || 'Age should be numbers (1-100)';
                },
              },
            })}
          />
        </div>
        <div className='from-group mb-3'>
          <AppDatePicker
            label='Date of Joining'
            format='dd-MM-yyyy'
            control={control}
            name='dateOfJoining'
            errorMessage={errors.dateOfJoining?.message}
            // minDate='2023-03-15'
            // maxDate='2023-05-15'
            validationRules={{
              required: 'Date of joining is required',
              validate: {
                acceptableDateRange: (fv) => {
                  return (
                    isWithinRange(fv, '2023-03-15', '2023-05-15') ||
                    'Must fall between 15-03-2023 and 15-05-2023'
                  );
                },
              },
            }}
          />
        </div>

        <div className='form-check mb-3'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='newsletter'
            {...register('newsletter')}
          />
          <label className='form-check-label' htmlFor='newsletter'>
            {' '}
            Newsletter{' '}
          </label>
        </div>

        <div className='from-group mb-3'>
          <label htmlFor='language' className='form-label'>
            Language
          </label>
          <select
            className='form-select'
            id='language'
            {...register('language')}
          >
            <option value='en'>English</option>
            <option value='fr'>French</option>
            <option value='de'>German</option>
          </select>
        </div>

        <div className='from-group mb-3'>
          <label className='form-label'>Rating</label>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='rating'
              id='good'
              value='good'
              {...register('rating')}
            />
            <label className='form-check-label' htmlFor='good'>
              {' '}
              Good{' '}
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='rating'
              id='okay'
              value='okay'
              {...register('rating')}
            />
            <label className='form-check-label' htmlFor='okay'>
              {' '}
              Okay{' '}
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='rating'
              id='should-improve'
              value='should-improve'
              {...register('rating')}
            />
            <label className='form-check-label' htmlFor='should-improve'>
              Should improve
            </label>
          </div>
        </div>

        <div className='form-group mb-3'>
          <label htmlFor='comments' className='form-label'>
            Comments
          </label>
          <textarea
            className='form-control'
            id='comments'
            rows='3'
            {...register('comments', {
              maxLength: 50,
              minLength: 5,
            })}
          ></textarea>
          <p className='text-danger form-text'>{errors.comments?.message}</p>
        </div>

        <button className='btn btn-primary btn-sm'>Submit</button>
      </form>
      <DevTool control={control} />
      <Toaster />
    </>
  );
};

export default SampleForm;
