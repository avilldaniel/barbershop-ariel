import { useReducer, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea, TextInput } from "@mantine/core";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Contact = () => {
  // Render message confirmation
  const [msgSent, setMsgSent] = useState(false);

  // Types and initial reducer state
  interface IState {
    from_name: string;
    email_id: string;
    message: string;
  }
  interface IAction {
    name: string;
    value: string;
  }
  type Action = {
    type: "CHANGE_INPUT";
    payload?: IAction;
  };
  const initForm = {
    from_name: "",
    email_id: "",
    message: "",
  };

  // Form reducer
  const formReducer = (state: IState, action: Action) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return {
          ...state,
          [action.payload!.name]: action.payload!.value,
        };
      default:
        return state;
    }
  };

  // useReducer()
  const [state, dispatch] = useReducer(formReducer, initForm);

  // Handle input change
  const handleChange = (e: FieldValues) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  // Zod schema
  const schema = z.object({
    from_name: z.string().min(1).max(25),
    email_id: z.string().email(),
    message: z.string().min(1).max(280),
  });

  // useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // Handle submit
  const contactSubmit: SubmitHandler<FieldValues> = async () => {
    try {
      // API to send email
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        { ...state },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      // Render confirmation
      setMsgSent(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className=".container">
      <h1>Contact Me</h1>

      <div className=".content">
        {/* Contact form */}
        {!msgSent ? (
          <div>
            <form onSubmit={handleSubmit(contactSubmit)}>
              {/* Name */}
              <TextInput
                {...register("from_name")}
                placeholder="Name *"
                error={errors.from_name?.message ? true : false}
                onChange={handleChange}
              />

              {/* Email */}
              <TextInput
                {...register("email_id")}
                placeholder="Email *"
                error={
                  errors.email_id?.message
                    ? (errors.email_id.message as unknown as any)
                    : false
                }
                onChange={handleChange}
              />

              {/* Message */}
              <Textarea
                {...register("message")}
                placeholder="Message *"
                error={
                  errors.message?.message
                    ? (errors.message.message as unknown as any)
                    : false
                }
                onChange={handleChange}
              />

              <button type="submit">Send</button>
            </form>
          </div>
        ) : (
          // Render message confirmation
          <div>
            <h5>Message sent!</h5>
            <p>
              Return <Link href="/">home</Link>{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
