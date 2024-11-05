import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Form1() {
  const form = useForm({
    defaultValues: {
      username: "abc",
      email: "",
      password: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phonenumbers: ["", ""],
      phNumbers: [{ number: ""}],
    },
  });
  const [email, setEmail] = useState("");
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const { fields, append, remove} = useFieldArray({
    name:"phNumbers",
    control
  })

  const onSubmit = (data) => {
    console.log("form Submitted", data);
    setEmail(data.email);
    console.log(data);
  };

  renderCount++;
  return (
    <div className="container p-3">
      <h1>Form {renderCount}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label>User Name:</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p className="text-danger">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label>Email:</label>
          <input
            type="text"
            id="email"
            {...register(
              "email",
              {
                required: {
                  value: true,
                  message: "Email is required",
                },
              },
              {
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
                validate: {
                  notAdmin: (email) => {
                    return (
                      email !== "admin@example.com" ||
                      "Enter a different email address"
                    );
                  },
                },
              }
            )}
          />
          <p className="text-danger">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            {...register("password",
            {
              required: {
                value: true,
                message: "Password is required",
              },
            },
             {
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message: "Weak password",
              },
            })}
          />
          <p className="text-danger">{errors.password?.message}</p>
        </div>

        <div className="form-control">
          <label>Twitter:</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: {
                value: true,
                message: "Twitter is required",
              },
            })}
          />
          <p className="text-danger">{errors?.social?.twitter?.message}</p>
        </div>

        <div className="form-control">
          <label>Facebook:</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: {
                value: true,
                message: "Facebook is required",
              },
            })}
          />
          <p className="text-danger">{errors?.social?.facebook?.message}</p>
        </div>

        <div className="form-control">
          <label>Primary Phone Number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phonenumbers.0", {
              required: {
                value: true,
                message: "Phone Number is required",
              },
            })}
          />
          <p className="text-danger">{errors?.phonenumbers?.[0]?.message}</p>
        </div>

        <div className="form-control">
          <label>Secondary Phone Number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phonenumbers.1", {
              required: {
                value: true,
                message: "Phone Number is required",
              },
            })}
          />
          <p className="text-danger">{errors?.phonenumbers?.[1]?.message}</p>
        </div>

        <div>
  <label>List of phone numbers</label>
  <div>
    {fields.map((field, index) => (
      <div className="form-control" key={field.id}>
        <input type="text" {...register(`phNumbers.${index}.number`)} />
        {index > 0 && (
          <button type="button" onClick={() => remove(index)}>Remove</button>
        )}
      </div>
    ))}
    <button type="button" onClick={() => append({ number: "" })}>Add phone number</button>
  </div>
</div>


        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default Form1;
