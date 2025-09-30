import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

interface PriceCounterProps {
  startPriceCounter: boolean;
  onPriceUpdate?: (cost: number) => void;
}

export default function PriceCounter({
  startPriceCounter,
  onPriceUpdate,
}: PriceCounterProps) {
  const [totalCost, setTotalCost] = useState(10);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (startPriceCounter) {
      interval = setInterval(() => {
        setTotalCost((prevCost) => prevCost + 1);
      }, 8000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [startPriceCounter]);

  useEffect(() => {
    if (onPriceUpdate) {
      onPriceUpdate(totalCost);
    }
  }, [totalCost, onPriceUpdate]);

  return <Text style={styles.priceText}>Totalkostnad: {totalCost} kr</Text>;
}

const styles = StyleSheet.create({
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
