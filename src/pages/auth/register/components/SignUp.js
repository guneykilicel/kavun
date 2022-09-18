import { Link, useLocation, useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../../../validation/register-schema";
import Button from "../../../../components/Button";
import Separator from "../../../../components/Separator";
import Icon from "../../../../components/Icon";
import Input from "../../../../components/Input";
import { Form, Formik } from "formik";
import { AiFillFacebook } from "react-icons/ai";
import { register } from "../../../../firebase.js";
import { Toaster } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || "/kavun", {
        replace: true,
      });
    }
  };

  return (
    <div className="bg-logo-pattern w-full h-screen bg-cover">
      <Toaster position="top-right" />
      <div className="grid place-content-start md:place-content-center justify-center flex items-center mt-36">
        <div className="bg-[#fdd037] w-[350px] grid gap-y-2.5 bg-white px-[40px] pt-10 pb-2 rounded-xl">
          <div className=" flex items-center justify-center pb-4 rounded-lg">
            <h1 className="text-2xl font-bold text-white">kavun</h1>
          </div>

          <p className="text-[17px] font-semibold flex items-center justify-center text-center text-[#8E8E8E] mb-[14px]">
            {/* Diyet fikirleri, yararlı bilgiler ve sağlıklı yaşam için kayıt ol. */}
            Sign up for diet ideas, helpful information and wellness.
          </p>

          <Formik
            validationSchema={RegisterSchema}
            initialValues={{
              email: "",
              full_name: "",
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-1.5">
                <Button>
                  <AiFillFacebook size={20} />
                  Log in with Facebook
                </Button>

                <Separator className="flex items-center mt-[10px] mb-[10px]" />

                <Input name="email" label="Mobile Number or email" />
                <Input name="full_name" label="Full Name" />
                <Input name="username" label="Username" />
                <Input type="password" name="password" label="Password" />

                <p className="text-xs text-center text-[#8e8e8e] py-2">
                  By signing up, you agree to our{" "}
                  <a href="#" className="font-semibold">
                    Terms
                  </a>
                  ,{" "}
                  <a href="#" className="font-semibold">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-semibold">
                    Cookies Policy
                  </a>
                  .
                </p>

                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Sign up
                </Button>
                <div className="mb-4"></div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-[#eaebed] p-6 text-sm text-center mt-3 rounded-xl">
          Have an account?{" "}
          <Link to="/kavun/auth/login" className="font-semibold text-brand">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
