// Skapa funktionell komponent för Kontakt
const Kontakt = ({ message, setMessage }) => {
  // Hantera inlämning av formulär
  const handleSubmit = (event) => {
    event.preventDefault();
    // Hantera formulärinlämningen
  };

  return (
    <div>
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ditt meddelande"
        />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Kontakt;
