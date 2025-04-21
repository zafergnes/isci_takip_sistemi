import React from 'react'
import styled from "styled-components";
import WorkerInput from '../components/WorkerInput';

const WorkersInput = () => {
  const workers = [
    //fake data
    {
      id: 1,
      name: "Ali",
      surname: "Topal",
      phone_number: "0542 234 2132",
      work_id: 3,
      img: "https://i.pravatar.cc/301",
      wage: 2300,
    },
    {
      id: 2,
      name: "Yusuf",
      surname: "Boncuk",
      phone_number: "0542 234 2132",
      work_id: 3,
      img: "https://i.pravatar.cc/302",
      wage: 2700,
    },
    {
      id: 3,
      name: "Mehmet",
      surname: "Şimşek",
      phone_number: "0542 234 2132",
      work_id: 2,
      img: "https://i.pravatar.cc/303",
      wage: 2500,
    },
    {
      id: 4,
      name: "Mert",
      surname: "Bayram",
      phone_number: "0542 234 2132",
      work_id: 1,
      img: "https://i.pravatar.cc/304",
      wage: 2000,
    },
    {
      id: 5,
      name: "Ali",
      surname: "Topal",
      phone_number: "0542 234 2132",
      work_id: 3,
      img: "https://i.pravatar.cc/301",
      wage: 2300,
    },
    {
      id: 6,
      name: "Yusuf",
      surname: "Boncuk",
      phone_number: "0542 234 2132",
      work_id: 3,
      img: "https://i.pravatar.cc/302",
      wage: 2700,
    },
    {
      id: 7,
      name: "Mehmet",
      surname: "Şimşek",
      phone_number: "0542 234 2132",
      work_id: 2,
      img: "https://i.pravatar.cc/303",
      wage: 2500,
    },
    {
      id: 8,
      name: "Mert",
      surname: "Bayram",
      phone_number: "0542 234 2132",
      work_id: 1,
      img: "https://i.pravatar.cc/304",
      wage: 2000,
    },
  ];
  return (
    
    <div className='grid sm:grid-cols-2 md:grid-cols-1 gap 5'>
      {
        workers.map((x,i)=>{
          return <WorkerInput workers={x}/>
        })
      }
    
    </div>
  );
};
const StyledWrapper = styled.div`
  .input {
    -webkit-appearance: none;
    /* remove default */
    display: block;
    margin: 10px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    vertical-align: middle;
    box-shadow: hsla(0, 0%, 100%, 0.15) 0 1px 1px,
      inset hsla(0, 0%, 0%, 0.5) 0 0 0 1px;
    background-color: hsla(25, 25%, 25%, 0.4);
    background-image: -webkit-radial-gradient(
      hsla(200, 100%, 90%, 1) 0%,
      hsla(200, 100%, 70%, 1) 15%,
      hsla(200, 100%, 60%, 0.3) 50%,
      hsla(200, 100%, 30%, 0) 100%
    );
    background-repeat: no-repeat;
    -webkit-transition: background-position 0.15s cubic-bezier(0.8, 0, 1, 1),
      -webkit-transform 0.25s cubic-bezier(0.8, 0, 1, 1);
    outline: none;
  }

  .input:checked {
    -webkit-transition: background-position 0.2s 0.15s
        cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  .input:active {
    -webkit-transform: scale(1.5);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  }

  /* The up/down direction logic */

  .input,
  .input:active {
    background-position: 0 24px;
  }

  .input:checked {
    background-position: 0 0;
  }

  .input:checked ~ .input,
  .input:checked ~ .input:active {
    background-position: 0 -24px;
  }
`;
export default WorkersInput