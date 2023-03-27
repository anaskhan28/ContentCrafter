import React from 'react'
import Tool from '../../components/Tool'
import mail from '../../assets/mail.png';

export const KeywordsExtractor = () => {
  return (
    <div>
        <Tool
         prompt="Extract keywords from this text. Make the first letter of each word uppercase and separate with commas"
         model="text-davinci-003"
         heading="Keyword Extractor"
         imageSrc={mail} 
         placeholder="Enter the text to extract keywords."
        />
    </div>
  )
}
export const TextSummarize = () => {
  return (
    <div>
        <Tool
         prompt="Summarize the following text in one sentence:"
         model="text-davinci-003"
         heading="Text Summarizer"
         imageSrc={mail} 
         placeholder="Enter the text to extract keywords."
        />
    </div>
  )
}
export const SentimentAnalyzer = () => {
  return (
    <div>
        <Tool
         prompt="Analyze the sentiment of this text and provide a score between -1 (negative) and 1 (positive)"
         model="text-davinci-003"
         heading="Sentiment Analyzer"
         imageSrc={mail} 
         placeholder="Enter the text to extract keywords."
        />
    </div>
  )
}

