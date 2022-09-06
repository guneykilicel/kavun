import * as Yup from "yup"

Yup.setLocale({
    mixed: {
        required: ""
    },
    string: {
        email: ""
    }
})

export default Yup