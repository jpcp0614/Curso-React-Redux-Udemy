import React from 'react';

const PassoForm = (props) => {
  const { passoForm, setPassoForm } = props;
  return (
    <div>
      <label htmlFor="PassoInput" style={{ fontSize: "20px" }}>Passo: </label>
        <input
          id="PassoInput"
          type="number"
          onChange={ (e) => setPassoForm(e.target.value) }
          value={ passoForm }
        />
    </div>
  );
}

export default PassoForm;