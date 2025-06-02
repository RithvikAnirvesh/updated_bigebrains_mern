import { useState, useCallback, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const voiceCommands = [
  'More information about BigEBrains',
  'IT Strategy & Consulting',
  'Connect me with Sales',
  'Industry Solutions',
  'Value Propositions'
];

export const useVoiceRecognition = (onResult: (text: string) => void) => {
  const [isListening, setIsListening] = useState(false);
  
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      onResult(transcript);
      resetTranscript();
    }
  }, [transcript, onResult, resetTranscript]);

  const startListening = useCallback(async () => {
    try {
      await SpeechRecognition.startListening({ continuous: true });
      setIsListening(true);
    } catch (error) {
      console.error('Error starting voice recognition:', error);
      setIsListening(false);
    }
  }, []);

  const stopListening = useCallback(() => {
    SpeechRecognition.stopListening();
    setIsListening(false);
    resetTranscript();
  }, [resetTranscript]);

  const commands = [
    {
      command: voiceCommands,
      callback: (command: string) => {
        onResult(command);
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.8
    },
    {
      command: '*',
      callback: (text: string) => {
        onResult(text);
      }
    }
  ];

  return {
    isListening,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition: browserSupportsSpeechRecognition && isMicrophoneAvailable
  };
};
