import React from 'react';
import { useHistory, useLocation, useParams } from "react-router-dom";

function UseReactRouter() {
    console.log(5, useHistory(), useLocation(), useParams())
  return (
    <div>
        useReactRouter
    </div>
  );
}

export default UseReactRouter;