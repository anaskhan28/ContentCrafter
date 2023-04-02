import React, { useState } from "react";
import axios from 'axios';
import InputField from "./InputField";
import Button from "./Button";
import ResultField from "./ResultField";
import { Loader, Placeholder } from 'rsuite';
interface ToolProps {
  prompt: string;
  model: string;
  max_tokens: number,
  heading: string;
  imageSrc: string;
  placeholder: string;
}

function Tool({ prompt, model, max_tokens, heading, imageSrc, placeholder }: ToolProps) {
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");


  const tool = async (text: string) => {
    const url = 'https://api.openai.com/v1/completions';
    const headers ={
      'Content-type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    };
    const data = {
      model: model,
      prompt: prompt + '\n\n'+ text,
      temperature: 0.5,
      max_tokens: max_tokens,
      frequency_penalty: 0.8,
    };
    setLoading(true);

    axios.post(url, data, {headers: headers}).then((response) =>{
      const keywords = response.data.choices[0].text.trim();
      setKeywords(keywords);
      setLoading(false)
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    tool(text);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setText(event.target.value);
  }


 
 

  return (
    <div className="flex justify-center items-center">
    
      <div className="h-[600px] w-[1000px] rounded-lg bg-gradient-to-r from-blue-700 to-cyan-500">
        <h1 className="underline text-center mt-4 relative text-2xl font-bold">
         {heading}
        </h1>
        <img
          className="relative flex justify-start max-w-[150px] items-start -mt-10"
          src={imageSrc}
        />
        <div className=" relative flex flex-col justify-center items-center -mt-16">
        <InputField
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <Button
        onClick={handleSubmit}
        loading={loading}
        label="GET AI ANSWER"
      />
      <ResultField value={keywords} />
        </div>
      </div>
    </div>
  );
}

export default Tool;


