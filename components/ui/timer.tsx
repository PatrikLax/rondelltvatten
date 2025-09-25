import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

interface TimerClockProps {
    startTimer: boolean;
}

export default function TimerClock({ startTimer }: TimerClockProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = 0;
    if (startTimer) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!startTimer && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTimer, seconds]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Text style={styles.timerText}>{formatTime(seconds)} </Text>
  )
} 

const styles = StyleSheet.create({
  timerText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});