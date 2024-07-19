import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function App() {
  const [url, setUrl] = useState(''); // Estado para armazenar a URL digitada
  const [pageLoaded, setPageLoaded] = useState(false); // Estado para controlar se a página foi carregada

  const handleLoadPage = () => {
    setPageLoaded(true); // Define que a página deve ser carregada
  };

  return (
    <View style={styles.container}>
      {!pageLoaded ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite a URL"
            onChangeText={text => setUrl(text)}
            value={url}
          />
          <Button
            title="Carregar página"
            onPress={handleLoadPage}
            disabled={url.trim() === ''}
          />
        </View>
      ) : (
        <WebView
          style={{ flex: 1 }}
          source={{ uri: url }}
          onError={() => alert('Erro ao carregar página')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
});
