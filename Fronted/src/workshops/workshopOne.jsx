import { useEffect, useState } from "react";
import possibleRisk from "./possibleRiskTable";
import calificableRisk from "./calificableRisk";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";

export function WorkshopOne() {
  const [risks, setRisks] = useState([]);
  const [myTitleRisk, setMyTitleRisk] = useState("");
  const [myDescriptionRisk, setMyDescriptionRisk] = useState("");
  const [myCalificableRisk, setCalificableRisk] = useState([]);

  const titleRisks = [
    "Desarrollo de una aplicación móvil bancaria",
    "Implementación de un sistema de inventario en una pyme",
    "Construcción de una plataforma de e-learning",
    "Proyecto de migración a la nube",
  ];

  const descriptionRisks = [
    "Un banco contrata a un equipo para crear una app donde los clientes puedan consultar saldos, hacer transferencias y pagos.",
    "Una empresa de comercio quiere migrar de registros en Excel a un sistema automatizado de inventario con lector de códigos de barras.",
    "Una universidad desarrolla una plataforma web para cursos virtuales con videoconferencias y evaluaciones en línea.",
    "Una empresa decide trasladar sus servidores locales (on-premise) hacia un proveedor de nube pública (AWS, Azure o GCP).",
  ];

  useEffect(() => {
    if (localStorage.getItem("myRisks")) {
      setRisks(JSON.parse(localStorage.getItem("myRisks")));
      setMyTitleRisk(localStorage.getItem("myTitleRisk"));
      setMyDescriptionRisk(localStorage.getItem("myDescriptionRisk"));
      setCalificableRisk(JSON.parse(localStorage.getItem("myCalificableRisk")));
      return;
    }
    const keys = Object.keys(possibleRisk);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const selectedKey = keys[randomIndex];

    const selectedRisks = possibleRisk[selectedKey];

    setRisks(selectedRisks);

    const selectedTitleRisk = titleRisks[randomIndex];

    setMyTitleRisk(selectedTitleRisk);

    const selectedDescription = descriptionRisks[randomIndex];

    setMyDescriptionRisk(selectedDescription);

    const selectCalificableRisk = calificableRisk[selectedKey];

    setCalificableRisk(selectCalificableRisk);

    localStorage.setItem("myRisks", JSON.stringify(selectedRisks));
    localStorage.setItem("myTitleRisk", selectedTitleRisk);
    localStorage.setItem("myDescriptionRisk", selectedDescription);
    localStorage.setItem(
      "myCalificableRisk",
      JSON.stringify(selectCalificableRisk)
    );
  }, []);

  const categorias = [
    { value: "PS", label: "PS - Riesgo Personal" },
    { value: "BU", label: "BU - Riesgo de Presupuesto" },
    { value: "CU", label: "CU - Riesgo de Cliente" },
    { value: "RE", label: "RE - Riesgo de Requisito" },
    { value: "DE", label: "DE - Riesgo de Entorno" },
    { value: "TE", label: "TE - Riesgo Tecnico" },
    { value: "ST", label: "ST - Riesgo de Estimacion" },
  ];

  const probabilidadOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const impactoOptions = [1, 2, 3, 4];
  const impactoLabels = {
    1: "1 - Catastrófico",
    2: "2 - Crítico",
    3: "3 - Marginal",
    4: "4 - Despreciable",
  };

  const updateRisk = (id, field, value) => {
    setRisks(
      risks.map((risk) => (risk.id === id ? { ...risk, [field]: value } : risk))
    );
  };

  let counter = 0;

  const sendResult = () => {
    counter = 0;
    risks.forEach((risk, index) => {
      if (
        risk.categoria == myCalificableRisk[index].categoria &&
        risk.probabilidad == myCalificableRisk[index].probabilidad &&
        risk.riesgo == myCalificableRisk[index].riesgo
      ) {
        counter += 1;
      }

      console.log(risk);
      console.log(myCalificableRisk[index]);
      console.log(index);
      console.log(counter);
    });

    alert(counter);
  };
  return (
    <>
      <NavBar />
      <div className="bg-white rounded-lg shadow-lg p-6 mt-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Taller de Tabla de Riesgos
            </h1>
            <p className="text-gray-600">
              Rellene la tabla con las caracteristicas de riesgo que cree que
              puede tener.
            </p>
          </div>
          <div className="w-0.5 h-40 bg-[#333027]"></div>
          <div className="max-w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Descripcion del problema
            </h1>
            <p className="text-gray-600">
              {myTitleRisk} - {myDescriptionRisk}
            </p>
          </div>
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
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-38">
                  Probabilidad (%)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-38">
                  Impacto
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                  MMMR
                </th>
              </tr>
            </thead>
            <tbody>
              {risks?.map((risk) => (
                <tr
                  key={risk.id}
                  className={`hover:opacity-80 transition-opacity`}
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
                      <option  disabled value="">
                        Seleccione una categoria
                      </option>
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

      <button className="w-20 h-20" onClick={sendResult}></button>
      <Footer />
    </>
  );
}
