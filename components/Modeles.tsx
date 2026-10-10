const modeles = [
  { title: "Évaluation de cours", text: "Un quiz d'entrée et de fin de séance pour mesurer les acquis." },
  { title: "Icebreaker", text: "Trois questions ludiques pour briser la glace en début de réunion." },
  { title: "Sondage interne", text: "Collectez les avis de l'équipe sur un sujet en quelques clics." },
];

export default function Modeles() {
  return (
    <section id="modeles">
      <div className="container">
        <div className="section-head">
          <h2>Modèles de questionnaires</h2>
          <p>Des cartes prêtes à l'emploi pour démarrer plus vite.</p>
        </div>
        <div className="cards">
          {modeles.map((m, i) => (
            <div className="card" key={m.title}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}