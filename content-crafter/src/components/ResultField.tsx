import React from 'react'


interface ResultFieldProps{
    value: string;
}

const ResultField: React.FC<ResultFieldProps> = ({value})=>{
    return (
        <textarea
        name="keywords"
        className="text-black text-center rounded-md  mt-14 -mb-8 h-[300px] w-[900px] "
        placeholder="The content will be arrive here"
        value={value}
        readOnly
      />
    )
}


export default ResultField