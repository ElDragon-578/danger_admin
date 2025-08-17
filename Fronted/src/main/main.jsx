import { NavBar } from "../components/navBar";
import { useState } from "react";
import { Plus, Trash2, Save } from 'lucide-react';

export function Main() {
  const [risks, setRisks] = useState([
    {
      id: 1,
      riesgo: "Estimación del tamaño puede ser significativamente baja",
      categoria: "PS",
      probabilidad: 60,
      impacto: 2,
      rmmm: "",
    },
    {
      id: 2,
      riesgo: "Mayor número de usuarios que el planificado",
      categoria: "PS",
      probabilidad: 30,
      impacto: 3,
      rmmm: "",
    },
    {
      id: 3,
      riesgo: "Menos reuso del planificado",
      categoria: "PS",
      probabilidad: 70,
      impacto: 2,
      rmmm: "",
    },
    {
      id: 4,
      riesgo: "Usuarios finales que se resisten al sistema",
      categoria: "BU",
      probabilidad: 40,
      impacto: 3,
      rmmm: "",
    },
    {
      id: 5,
      riesgo: "Fecha de entrega muy ceñida",
      categoria: "BU",
      probabilidad: 50,
      impacto: 2,
      rmmm: "",
    },
  ]);

  const categorias = [
    { value: "PS", label: "PS - Tamaño del producto" },
    { value: "BU", label: "BU - Impacto en el negocio" },
    { value: "CU", label: "CU - Características del cliente" },
    { value: "PD", label: "PD - Definición del proceso" },
    { value: "TE", label: "TE - Entorno tecnológico" },
    { value: "DE", label: "DE - Experiencia en desarrollo" },
    { value: "ST", label: "ST - Tamaño del equipo" },
    { value: "ET", label: "ET - Otros" },
  ];

  const probabilidadOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const impactoOptions = [1, 2, 3, 4];
  const impactoLabels = {
    1: "1 - Catastrófico",
    2: "2 - Crítico",
    3: "3 - Marginal",
    4: "4 - Despreciable",
  };

  const addNewRisk = () => {
    const newRisk = {
      id: Date.now(),
      riesgo: "",
      categoria: "PS",
      probabilidad: 30,
      impacto: 2,
      rmmm: "",
    };
    setRisks([...risks, newRisk]);
  };

  const deleteRisk = (id) => {
    setRisks(risks.filter((risk) => risk.id !== id));
  };

  const updateRisk = (id, field, value) => {
    setRisks(
      risks.map((risk) => (risk.id === id ? { ...risk, [field]: value } : risk))
    );
  };

  const getRiskColor = (probabilidad, impacto) => {
    const score = probabilidad * (5 - impacto);
    if (score >= 240) return "bg-red-100 border-red-300";
    if (score >= 160) return "bg-orange-100 border-orange-300";
    if (score >= 80) return "bg-yellow-100 border-yellow-300";
    return "bg-green-100 border-green-300";
  };
  return (
    <>
      <NavBar />
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gestión de Riesgos del Proyecto
            </h1>
            <p className="text-gray-600">
              Tabla de análisis y seguimiento de riesgos basada en metodología
              de Ingeniería de Software
            </p>
          </div>
          <button
            onClick={addNewRisk}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={20} />
            Agregar Riesgo
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                  Riesgo
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-32">
                  Categoría
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-32">
                  Probabilidad (%)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-32">
                  Impacto
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                  RMMM
                </th>
              </tr>
            </thead>
            <tbody>
              {risks.map((risk) => (
                <tr
                  key={risk.id}
                  className={`${getRiskColor(
                    risk.probabilidad,
                    risk.impacto
                  )} hover:opacity-80 transition-opacity`}
                >
                  <td className="border border-gray-300 px-4 py-3">
                    {risk.riesgo}
                
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <select
                      value={risk.categoria}
                      onChange={(e) =>
                        updateRisk(risk.id, "categoria", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      {categorias.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <select
                      value={risk.probabilidad}
                      onChange={(e) =>
                        updateRisk(
                          risk.id,
                          "probabilidad",
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      {probabilidadOptions.map((prob) => (
                        <option key={prob} value={prob}>
                          {prob}%
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <select
                      value={risk.impacto}
                      onChange={(e) =>
                        updateRisk(risk.id, "impacto", parseInt(e.target.value))
                      }
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      {impactoOptions.map((imp) => (
                        <option key={imp} value={imp}>
                          {impactoLabels[imp]}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <textarea
                      value={risk.rmmm}
                      onChange={(e) =>
                        updateRisk(risk.id, "rmmm", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                      rows="2"
                      placeholder="Risk Mitigation, Monitoring and Management..."
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
