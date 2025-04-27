import React from 'react'
import { useParams } from "react-router-dom";

const Worker = () => {
  let { id } = useParams();
  return (
    <div>
      <p>çalışan id: {id}</p>
    </div>
  );
};

export default Worker