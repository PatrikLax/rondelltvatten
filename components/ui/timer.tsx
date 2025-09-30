import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

interface TimerClockProps {
  startTimer: boolean;
  onTimeUpdate?: (seconds: number) => void;
}

export default function TimerClock({
  startTimer,
  onTimeUpdate,
}: TimerClockProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = 0;
    if (startTimer) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!startTimer && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTimer, seconds]);

  useEffect(() => {
    if (onTimeUpdate) {
      onTimeUpdate(seconds);
    }
  }, [seconds, onTimeUpdate]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return <Text style={styles.timerText}>{formatTime(seconds)}</Text>;
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
