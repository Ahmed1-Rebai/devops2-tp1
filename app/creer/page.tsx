import Link from "next/link";

export default function Creer() {
  return (
    <section>
      <div className="container">
        <h2>Nouveau questionnaire</h2>
        {/* À compléter : champs Titre et Description, bouton Enregistrer désactivé */}
        <p><Link href="/">← Retour à l'accueil</Link></p>
      </div>
    </section>
  );
}