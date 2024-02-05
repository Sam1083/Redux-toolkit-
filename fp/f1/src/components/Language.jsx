import React, { useState } from 'react';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

  return (
    <div className='ms-4 mt-4 d-flex flex-column justify-content-center align-items-center'>
      <h2>Select Your Language</h2>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select Language</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      {selectedLanguage && <p>You selected: {selectedLanguage}</p>}
    </div>
  );
};

export default Language;

