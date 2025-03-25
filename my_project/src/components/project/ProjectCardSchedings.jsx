import styles from './ProjectCardSchedings.module.css';
import ProjectSwitch from './ProjectSwitch';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function ProjectCardSchedings() {
  const [scheding, setScheding] = useState([]);
  const [stateCards, setStateCard] = useState({}); 

  useEffect(() => {
    console.log('objeto stateCard:', stateCards)
  },[stateCards])
 

  useEffect(() => {
    fetch('http://localhost:5000/scheduling', {
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
          
          {chunk.map((data) => {
            const stateCard = stateCards[data.id] || {};
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
                <h3>{data.time}</h3>
                <p>Data: {data.date}</p>
                <p>Procedimento: {data.service}</p>
                <p>Profissional: {data.professional}</p>

                {!stateCard.canceled && (
                   <div className={styles.position_confirm}>
                   <ProjectSwitch
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

ProjectCardSchedings.propTypes = {
  list: PropTypes.func
};
