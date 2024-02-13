import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null); // null is used to determine if a conversion has happened
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('SAR');
  const currencyOptions = ['USD', 'SAR', 'EUR', 'JPY'];  // Add more currencies as needed

  // Conversion rates should ideally be fetched from a real API for up-to-date conversions
  const conversionRates = {
    USD_SAR: 3.75,
    USD_JPY: 110.0,
    USD_EUR: 0.92,

    SAR_USD: 1 / 3.75,
    SAR_EUR: 0.92 * 1 / 3.75,
    SAR_JPY: 29.37,
    
    EUR_USD: 1 / 0.92,
    EUR_SAR: 3.75 * 1 / 0.92,
    EUR_JPY: 127.5,

    JPY_USD: 1 / 110.0,
    JPY_EUR: 1 / 127.5,
    JPY_SAR: 1 / 29.37,
  
   
  };

  const convertCurrency = () => {
    // Ensure the amount is a number before converting
    const amountNumber = parseFloat(amount);
    if (!isNaN(amountNumber)) {
      const conversionKey = `${fromCurrency}_${toCurrency}`;
      const rate = conversionRates[conversionKey];
      if (rate) {
        const converted = (amountNumber * rate).toFixed(2);
        setConvertedAmount(`${converted} ${toCurrency}`);
      } else {
        // Handle the case where the conversion rate is not found
        console.error(`No conversion rate found for ${conversionKey}`);
      }
    } else {
      // Handle the case where the amount is not a valid number
      console.error(`Invalid amount: ${amount}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>From Currency:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={fromCurrency}
            onValueChange={(itemValue) => setFromCurrency(itemValue)}
            style={styles.picker}
            mode="dropdown">
            {currencyOptions.map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>To Currency:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={toCurrency}
            onValueChange={(itemValue) => setToCurrency(itemValue)}
            style={styles.picker}
            mode="dropdown">
            {currencyOptions.map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker>
        </View>
      </View>

      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Enter amount"
      />

      <Button title="Convert" onPress={convertCurrency} />

      {convertedAmount !== null && (
        <Text style={styles.convertedAmount}>
          Converted Amount: {convertedAmount}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    backgroundColor: '#fafafa',
  },
  picker: {
    height: 50,
    width: '100%',
    // Android specific styling
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  convertedAmount: {
    marginTop: 20,
  },
});

export default CurrencyConverter;
