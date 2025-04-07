import styles from './ProjectCardSchedings.module.css';
import ProjectSwitch from './ProjectSwitch';
import { useState, useEffect } from 'react';




function ProjectCardSchedings() {
  const [scheding, setScheding] = useState([]);
  const [stateCards, setStateCard] = useState({}); 

  // useEffect(() => {
  //   console.log('objeto stateCard:', stateCards)
  // },[stateCards])
 
  // useEffect(() => {
  //   console.log('Retorno do API (agendamento): ',scheding)
  //  },[stateCards])

  useEffect(() => {
    fetch('http://localhost:8000/api/scheduling/', {

      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((request) => request.json())
      .then((data) => {
        setScheding(data);
      });
  }, []);
  

    
  useEffect(() => {  
   
    console.log(" Dados enviados para a API:", JSON.stringify(stateCards, null, 2)); 

    fetch("http://localhost:8000/api/scheduling/update_multiple/", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stateCards) //  Enviando como objeto
    })
    .then(response => response.json())
    .then(data => console.log(" Resposta da API:", data))
    .catch(error => console.error(" Erro ao atualizar:", error));

}, [stateCards]);


  const stateConfirm = (id, status) => {
    setStateCard((previous) => ({
      ...previous,
      [id]: { ...previous[id], confirm: status }
     
    }))
    
  };
  const stateCanceled = (id, status) => {
    setStateCard((previous) => ({
      ...previous,
      [id]: { ...previous[id], canceled: status,}
    }));
  };
 
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const schedingChunks = chunkArray(scheding, 4);

  return (
    <div className={styles.container}>
      {schedingChunks.map((chunk, index) => (
        <div key={index} className={styles.list_schedings}>
          {console.log('Sublista: ',chunk)}
          {chunk.map((data) => {
            const stateCard = stateCards[data.id] || scheding.find(itens => itens.id === data.id);
            return (
              <div
                key={data.id}
                className={`${styles.card_container} ${
                  stateCard.confirm
                    ? styles.confirm
                    : stateCard.canceled
                    ? styles.canceled
                    : ''
                }`}
              > 
                <p>confirm: {Boolean(stateCard.confirm || false)}</p>

                <h3>{data.time}</h3>
                <p>Data: {data.date}</p>
                <p>Procedimento: {data.service}</p>
                <p>Profissional: {data.professional}</p>

                  {!stateCard.canceled && (
                   <div className={styles.position_confirm}>
                   <ProjectSwitch
                    stateSwitch_confirm = {scheding.find(itens => itens.id === data.id)?.confirm || false}
                    ok={true}
                    text_confirm='Confirmado'
                    confirm={(state) => stateConfirm(data.id, state)}
                    canceled={(state) => stateCanceled(data.id, state)}                   
                   />               
               </div>
                )}
                
             {!stateCard.confirm && (
               <div className={styles.position_canceled}>
               <ProjectSwitch
                  stateSwitch_canceled = {scheding.find(itens => itens.id === data.id)?.canceled || false}
                  annulled={true}
                  text_canceled='Cancelado'
                  confirm={(state) => stateConfirm(data.id, state)}
                  canceled={(state) => stateCanceled(data.id, state)}                    
                   />
               </div>
             )} 

              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default ProjectCardSchedings;

