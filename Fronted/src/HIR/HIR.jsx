import React, { useState } from "react";
import {
  AlertTriangle,
  Calendar,
  User,
  FileText,
  Save,
  Printer,
} from "lucide-react";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";

export function HIR() {
  const [formData, setFormData] = useState({
    riesgoId: "RSK-001",
    fecha: new Date().toISOString().split("T")[0],
    probabilidad: 40,
    impacto: 3,
    descripcion:
      "Retraso en la entrega de componentes críticos del software debido a dependencias externas no identificadas durante la fase de planificación.",
    refinamientoContexto:
      "El proyecto depende de una API externa que está en proceso de actualización. El proveedor no ha confirmado fechas exactas de disponibilidad, lo que podría impactar el cronograma del proyecto.",
    mitigacionMonitoreo:
      "Establecer reuniones semanales con el proveedor de la API, desarrollar un plan B con una API alternativa, y asignar recursos adicionales para pruebas de integración.",
    manejoContigencia:
      "Si la API no está disponible en 2 semanas: activar plan B con API alternativa. Disparador: confirmación del proveedor sobre retrasos superiores a 15 días.",
    estadoActual: "En seguimiento - Esperando confirmación del proveedor",
    fechaEstado: new Date().toISOString().split("T")[0],
    originador: "Jhon Deivid - Project Manager",
    asignado: "Pepito Medieta - Tech Lead",
  });

  const probabilidadOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const impactoOptions = [
    { value: 1, label: "1 - Catastrófico" },
    { value: 2, label: "2 - Crítico" },
    { value: 3, label: "3 - Marginal" },
    { value: 4, label: "4 - Despreciable" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getRiskLevel = () => {
    const score = formData.probabilidad * (5 - formData.impacto);
    if (score >= 240)
      return {
        level: "Crítico",
        color: "bg-red-500",
        textColor: "text-red-700",
      };
    if (score >= 160)
      return {
        level: "Alto",
        color: "bg-orange-500",
        textColor: "text-orange-700",
      };
    if (score >= 80)
      return {
        level: "Medio",
        color: "bg-yellow-500",
        textColor: "text-yellow-700",
      };
    return {
      level: "Bajo",
      color: "bg-green-500",
      textColor: "text-green-700",
    };
  };

  const riskLevel = getRiskLevel();

  return (
    <>
        <NavBar/>
      <div className="max-w-4xl mx-auto my-20">
        <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#F5C431] to-[#C9AA4B] text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle size={32} />
                <div>
                  <h1 className="text-3xl font-bold">
                    Hoja de Información de Riesgos
                  </h1>
                  <p className="text-blue-100 mt-1">
                    Registro y seguimiento de riesgos del proyecto
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información básica */}
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <FileText size={16} />
                  Riesgo ID:
                </label>
                <input
                  type="text"
                  value={formData.riesgoId}
                  onChange={(e) =>
                    handleInputChange("riesgoId", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Calendar size={16} />
                  Fecha:
                </label>
                <input
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => handleInputChange("fecha", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Probabilidad:
                </label>
                <select
                  value={formData.probabilidad}
                  onChange={(e) =>
                    handleInputChange("probabilidad", parseInt(e.target.value))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {probabilidadOptions.map((prob) => (
                    <option key={prob} value={prob}>
                      {prob}%
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Impacto:
                </label>
                <select
                  value={formData.impacto}
                  onChange={(e) =>
                    handleInputChange("impacto", parseInt(e.target.value))
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {impactoOptions.map((imp) => (
                    <option key={imp.value} value={imp.value}>
                      {imp.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Indicador de nivel de riesgo */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  Nivel de Riesgo Calculado:
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full ${riskLevel.color}`}
                  ></div>
                  <span className={`font-bold ${riskLevel.textColor}`}>
                    {riskLevel.level}
                  </span>
                  <span className="text-gray-500 text-sm">
                    (Score: {formData.probabilidad * (5 - formData.impacto)})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Secciones de texto */}
          <div className="p-6 space-y-6">
            <div className="space-y-3">
              <label className="text-lg font-semibold text-gray-800 block">
                Descripción del Riesgo
              </label>
              <textarea
                value={formData.descripcion}
                onChange={(e) =>
                  handleInputChange("descripcion", e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                rows="3"
                placeholder="Describe detalladamente el riesgo identificado..."
              />
            </div>

            <div className="space-y-3">
              <label className="text-lg font-semibold text-gray-800 block">
                Refinamiento y Contexto
              </label>
              <textarea
                value={formData.refinamientoContexto}
                onChange={(e) =>
                  handleInputChange("refinamientoContexto", e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                rows="3"
                placeholder="Proporciona contexto adicional y detalles específicos del riesgo..."
              />
            </div>

            <div className="space-y-3">
              <label className="text-lg font-semibold text-gray-800 block">
                Mitigación y Monitoreo
              </label>
              <textarea
                value={formData.mitigacionMonitoreo}
                onChange={(e) =>
                  handleInputChange("mitigacionMonitoreo", e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                rows="3"
                placeholder="Define las estrategias de mitigación y métodos de monitoreo..."
              />
            </div>

            <div className="space-y-3">
              <label className="text-lg font-semibold text-gray-800 block">
                Manejo, Plan de Contingencia y Disparadores
              </label>
              <textarea
                value={formData.manejoContigencia}
                onChange={(e) =>
                  handleInputChange("manejoContigencia", e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                rows="3"
                placeholder="Especifica las acciones de contingencia y los eventos disparadores..."
              />
            </div>
          </div>

          {/* Estado actual */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="space-y-4">
              <label className="text-lg font-semibold text-gray-800 block">
                Estado Actual
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">
                    Fecha de Estado:
                  </label>
                  <input
                    type="date"
                    value={formData.fechaEstado}
                    onChange={(e) =>
                      handleInputChange("fechaEstado", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">
                    Descripción del Estado:
                  </label>
                  <input
                    type="text"
                    value={formData.estadoActual}
                    onChange={(e) =>
                      handleInputChange("estadoActual", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Estado actual del riesgo..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Responsables */}
          <div className="p-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <User size={20} />
                  Originador:
                </label>
                <input
                  type="text"
                  value={formData.originador}
                  onChange={(e) =>
                    handleInputChange("originador", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nombre del originador del riesgo..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <User size={20} />
                  Asignado:
                </label>
                <input
                  type="text"
                  value={formData.asignado}
                  onChange={(e) =>
                    handleInputChange("asignado", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Responsable de gestionar el riesgo..."
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 p-4 text-center">
            <p className="text-sm text-gray-600">
              Documento generado automáticamente - Sistema de Gestión de Riesgos
              v2.0
            </p>
          </div>
        </article>
      </div>
      <Footer/>
    </>
  );
}
