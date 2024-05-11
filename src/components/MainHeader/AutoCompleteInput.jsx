import React, { useState } from 'react';
import classes from './MainHeader.module.css';

function AutocompleteInput() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Array de exemplos de bairros
  const bairros = [
    "Barra",
    "Vitória",
    "Graça",
    "Rio Vermelho",
    "Pituba",
    "Itapuã",
  ];

  // Função para atualizar as sugestões baseadas no valor do input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const filteredSuggestions = bairros.filter(bairro =>
      bairro.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Função para atualizar o valor do input ao selecionar uma sugestão
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div className={classes.autocomplete_container}>
      <input
        className={classes.autocomplete_input}
        type="text"
        placeholder="Buscar bairro"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul className={classes.autocomplete_suggestions}>
        {suggestions.map((suggestion, index) => (
          <li key={index} className={classes.autocomplete_suggestion} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AutocompleteInput;
