import { useField } from "formik"
import { useEffect, useRef, useState } from "react"
import classNames from "classnames";

export default function Input({label, type='text', ...props}) {

    const [field, meta, helpers] = useField(props); /* for formik */
    const [show, setShow] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(()=>{
        if(show) {
            setInputType('text')
        } else if(type==='password') {
            setInputType('password')
        }
    },[show])
    return(
        <label className="block relative flex bg-zinc-50 border rounded-md focus-within:border-gray-400">
            <input type={inputType} className={classNames({
                "px-2 w-full h-[38px] text-[12px] outline-none bg-transparent" : true,
                "pt-[10px]": field.value
            })} {...field} {...props}/>
            <small className={classNames({
                "absolute left-[9px] pointer-events-none cursor-text text-gray-500 -translate-y-1/2 transition-all" : true,
                "text-xs top-1/2": !field.value,
                "text-[10px] top-2.5": field.value
            })}>{label}</small>
            {type === 'password' && field.value && (
                <div onClick={()=>{setShow(!show)}} className="h-full cursor-pointer select-none flex items-center text-sm font-semibold pr-2">
                    {show?'Hide':'Show'}
                </div>
            )}
            {meta.error}
        </label>
    )
}