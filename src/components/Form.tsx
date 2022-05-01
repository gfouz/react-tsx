import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  email: string;
  message: string;
};

const ReactHookForm = () => {
  const [close, setClose] = React.useState<boolean>(false);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const url: string = "https://formspree.io/f/mbjwalqp";

  function onSubmit(data: FormValues) {
    setClose(true);
    console.log(data);
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            required: true,
          }}
          render={({ field, formState: { errors, isSubmitted } }) => (
            <div>
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                label="Email"
                color={errors.email ? "secondary" : "primary"}
              />
              {errors.email?.type === "pattern" && (
                <span>email includes an @ symbol !</span>
              )}
              {errors.email?.type === "required" && (
                <span>email is required !</span>
              )}
            </div>
          )}
        />
        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => (
            <div>
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                label="Message"
                color={errors.message ? "secondary" : "primary"}
              />
              {errors.message?.type === "required" && (
                <span>This field must not be empty !</span>
              )}
            </div>
          )}
        />
        <Button type="submit" size="medium" color="primary" variant="contained">
          send
        </Button>
      </form>
    </div>
  );
};
export default ReactHookForm;
