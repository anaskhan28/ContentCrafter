import React from 'react'
import Tool from '../../components/Tool'
import extractor from '../../assets/loader.png';
import sentiment from '../../assets/sentiment.png';
import summarize from '../../assets/step.png';
import latptop from '../../assets/laptop.png';
import mobile from '../../assets/mobile.png';
import expense from '../../assets/expense.png';

export const KeywordsExtractor = () => {
  return (
    <div>
        <Tool
         prompt="Extract keywords from this text. Make the first letter of each word uppercase and separate with commas"
         model="text-davinci-003"
         max_tokens = {60}
         heading="Keyword Extractor"
         imageSrc={extractor} 
         placeholder="Enter the text to extract keywords."
        />
    </div>
  )
}
export const TextSummarize = () => {
  return (
    <div>
        <Tool
         prompt="Summarize the following text within five line:"
         model="text-davinci-003"
         max_tokens = {60}
         heading="Text Summarizer"
         imageSrc={summarize}
         
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
         max_tokens = {60}
         heading="Sentiment Analyzer"
         imageSrc={sentiment} 
         placeholder="Enter the text to analyze the text."
        />
    </div>
  )
}
export const Grammarly = () => {
  return (
    <div>
        <Tool
         prompt="Correct the spelling errors in the following text and give feedback too:"
         model="text-davinci-003"
         max_tokens = {100}
         heading="Spell-checking"
         imageSrc={latptop} 
         placeholder="Enter the text to check grammar mistake"
        />
    </div>
  )
}
export const MovieToEmoji = () => {
  return (
    <div>
        <Tool
         prompt="Convert the movie name into emojis:"
         model="text-davinci-003"
         max_tokens = {60}
         heading="Cine-moji"
         imageSrc={mobile} 
         placeholder="Enter the movie to convert into emoji"
        />
    </div>
  )
}
export const HashTweet = () => {
  return (
    <div>
        <Tool
         prompt="Generate tweets with hashtags on the topic"
         model="text-davinci-003"
         max_tokens = {60}
         heading="HashTweet"
         imageSrc={expense} 
         placeholder="Enter the topic to create viral tweet"
        />
    </div>
  )
}

