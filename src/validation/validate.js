import * as Yup from "yup"

Yup.setLocale({
    mixed: {
        required: <div className="text-red-500 font-bold text-3xl flex items-center pr-1">!</div>
    },
    string: {
        email: <div className="text-red-500 font-bold text-3xl flex items-center pr-1">!</div>
    }
})

export default Yup