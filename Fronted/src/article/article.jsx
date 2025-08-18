import React, { useState } from 'react';
import { Eye, Calendar, User } from 'lucide-react';

export function ExhibitionArticles() {
  const [articles] = useState([
    {
      id: 1,
      title: "",
      content: "",
      image: "",
      author: "",

    },
    {
      id: 2,
      title: "",
      content: "",
      image: "",
      author: "",

    },
    {
      id: 3,
      title: "",
      content: "",
      image: "",
      author: "",
      
    },
    {
      id: 4,
      title: "",
      content: "",
      image: "",
      author: "",
    },
    {
      id: 5,
      title: "",
      content: "",
      image: "",
      author: "",
    },
    {
      id: 6,
      title: "",
      content: "",
      image: "",
      author: "",
    },
  ]);

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
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors duration-300">
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
          
          <button className="self-start bg-gradient-to-r from-[#F5C431] to-[#A18E55] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:from-[#A18E55] hover:to-[#F5C431] hover:shadow-lg transform hover:-translate-y-1">
            Leer más
          </button>
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