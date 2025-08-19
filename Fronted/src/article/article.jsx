import React, { useState } from 'react';
import { Eye, Calendar, User } from 'lucide-react';
import riskTableImg from "../assets/tabla_riesgos.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HIR from "../assets/HIR.png"
import charette from "../assets/Charette.jpg"

export function ExhibitionArticles() {
  const [articles] = useState([
    {
      id: 1,
      title: "Clasificación de Riesgos",
      content: "La gestión de riesgos constituye un componente esencial en el éxito de los proyectos de software. Identificar, analizar y categorizar los riesgos permite a los equipos anticiparse a problemas y diseñar estrategias de mitigación efectivas.Autores como Robert N. Charette han señalado que la clasificación de riesgos tiene un carácter inevitablemente subjetivo: depende de las percepciones y experiencias de quienes participan en el proyecto. En este sentido, una buena práctica es apoyarse en esquemas de categorización que faciliten la comprensión y el análisis, aunque siempre reconociendo que la realidad puede desbordar cualquier marco rígido.",
      image: "https://cdn.gamma.app/7ppi847inz25yuh/03d32e63015d41d4aa729fd1727edd1b/original/image.png",
      author: "Robert N. Charette",
      link: "https://dl.acm.org/doi/10.5555/73468"
    },
    {
      id: 2,
      title: "Categorizacion subjetiva de riesgos",
      content: "Segun Charette, la gestión de riesgos en proyectos de software no solo se apoya en métricas cuantitativas, sino también en percepciones y experiencias. Robert N. Charette, uno de los pioneros en este campo, advierte que la forma en que se clasifican y entienden los riesgos es altamente subjetiva: depende de los juicios humanos, los sesgos emocionales y la experiencia de los equipos de trabajo. Por ello, cualquier categorización debe asumirse como una guía flexible más que como una verdad absoluta.",
      image: charette,
      author: "Robert N. Charette",
      link: "https://www.scirp.org/html/5068.html?utm_source=chatgpt.com"
    },
    {
      id: 3,
      title: "Tablas de Riesgos",
      content: "En la gestión de proyectos de software, ingeniería o negocios, el riesgo se entiende como cualquier evento incierto que, de ocurrir, puede afectar de manera positiva o negativa los objetivos planteados. Para gestionar de forma ordenada estos riesgos, se recurre a un instrumento ampliamente utilizado: la tabla de riesgos.",
      image: riskTableImg,
      author: "Roger S. Pressman",
      link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiC09XstpWPAxXQRjABHeeXFkUQFnoECBwQAQ&url=http%3A%2F%2Fartemisa.unicauca.edu.co%2F~cardila%2FIS__Libro_Pressman_7.pdf&usg=AOvVaw2KgmzHHXLDZkqpBOyEHfIP&opi=89978449"
    },
    {
      id: 4,
      title: "HIR",
      content: "En la gestión de proyectos, la identificación de riesgos no basta con enlistar posibles problemas: se requiere una descripción detallada y estructurada de cada riesgo para entender su origen, impacto y las acciones necesarias para enfrentarlo. Con este fin surgen las HIR (Hojas de Información de Riesgo), un instrumento complementario a la tabla de riesgos que permite profundizar en el análisis de cada amenaza o incertidumbre.",
      image: HIR,
      author: "Roger S. Pressman",
      link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiC09XstpWPAxXQRjABHeeXFkUQFnoECBwQAQ&url=http%3A%2F%2Fartemisa.unicauca.edu.co%2F~cardila%2FIS__Libro_Pressman_7.pdf&usg=AOvVaw2KgmzHHXLDZkqpBOyEHfIP&opi=89978449"
    },
  ]);
  const navigate = new useNavigate()

  const ArticleCard = ({ article, index }) => {
    const isEven = index % 2 === 0;
    
    return (
      <article className={`bg-white rounded-2xl shadow-lg overflow-hidden mb-12 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex flex-col lg:flex lg:min-h-[400px]`}>
        
        {/* Imagen */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
        </div>
        
        {/* Contenido */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-[#F5C431] transition-colors duration-300">
              {article.title}
            </h2>
            
            <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
              <div className="flex items-center space-x-1">
                <User size={16} />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {article.content}
          </p>
          
          <Link to={article.link} className="self-start bg-gradient-to-r from-[#F5C431] to-[#A18E55] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:from-[#A18E55] hover:to-[#F5C431] hover:shadow-lg transform hover:-translate-y-1" >
            Leer más
          </Link>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen ">
      {/* Articles */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </main>
    </div>
  );
};

export default ExhibitionArticles;