import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useController } from 'react-hook-form';
import { DateTime } from 'luxon';
import { getDateFromString } from './date-utils';

const AppDatePicker = React.forwardRef((props, ref) => {
  const { error, label, format, name, control, slotProps } = props;

  const { field } = useController({
    name,
    control,
    rules: {
      ...props.validationRules,
    },
  });

  const getMinDate = () => {
    return getDateFromString(props.minDate);
  };

  const getMaxDate = () => {
    return getDateFromString(props.maxDate);
  };

  const getDateFromForm = () => {
    return getDateFromString(field.value);
  };

  const setISODateInForm = (v) => {
    field.onChange(v.toISO());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label={label}
          format={format}
          onChange={setISODateInForm}
          onBlur={field.onBlur}
          value={getDateFromForm()}
          inputRef={field.ref}
          name={field.name}
          slotProps={
            props.errorMessage
              ? {
                  textField: {
                    error: props.errorMessage,
                    helperText: props.errorMessage,
                  },
                }
              : null
          }
          minDate={getMinDate()}
          maxDate={getMaxDate()}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
});

export default AppDatePicker;
