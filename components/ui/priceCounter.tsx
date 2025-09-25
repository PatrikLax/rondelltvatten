import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from 'react-native';

interface PriceCounterProps {
  startPriceCounter: boolean;
}

export default function PriceCounter({
  startPriceCounter,
}: PriceCounterProps) {
    const [totalCost, setTotalCost] = useState(10);
    
    useEffect(() => {
      let interval: number | null = null;
      if (startPriceCounter) {
        interval = setInterval(() => {
          setTotalCost(prevCost => prevCost + 1);
        }, 8000);
      } else {
        clearInterval(0);
      }
      return () => clearInterval(0);
    }, [startPriceCounter]);

    const formatPrice = () => {
      return `${totalCost} kr`;
    };
      
    return ( 
      <Text style={styles.priceText}>Totalkostnad: {formatPrice()}</Text>
    );
}

const styles = StyleSheet.create({
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});