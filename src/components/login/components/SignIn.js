import { Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { LoginSchema } from "../../../validation/login-schema"
import Button from "./Button"
import Input from "./Input"
import Separator from "./Separator"


const SignIn = ()=>{
    return(
        <div className="w-[350px] grid gap-y-2.5">
          <div className="bg-white border px-[40px] pt-10 pb-2 ">
            <div className="flex justify-center">
              <img
                className="h-[51px] mb-8 "
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              />
            </div>

            <Formik
              validationSchema={LoginSchema}
              initialValues={{
                username: "",
                password: "",
              }}
            //   onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty, values }) => (
                <Form className="grid gap-y-1.5">
                  <Input
                    name="username"
                    label="Phone number, username or email"
                  />
                  <Input type="password" name="password" label="Password" />

                  <Button
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                  >
                    Log In
                  </Button>

                  <Separator label="OR" />
                  <a
                    href="#"
                    className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook"
                  >
                    {/* <AiFillFacebook size={20} /> */}
                    Log in with Facebook
                  </a>
                  <a
                    href="#"
                    className="text-xs flex items-center justify-center text-link mt-3 pb-4"
                  >
                    Forgotten your password?
                  </a>
                </Form>
              )}
            </Formik>
          </div>

          <div className="bg-white border p-4 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-brand">
              Sign up
            </Link>
          </div>
        </div>
    )
}
export default SignIn