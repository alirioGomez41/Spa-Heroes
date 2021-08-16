import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch   
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);


    return (
        <Router>
        <div>
          {/* <h2>Comparto con los dos</h2> */}
          <Switch>
            {/* Creamos una ruta publica para que solo sea visible cuando cuando no se esta logueado
              ya que el usuario podria ponerse comiquita y escribir la ruta del login cuando
              esta logueado y acceder a ella.
            */}
            <PublicRoute 
              path="/login" exact  
              component={LoginScreen}
              isAuthenticated={user.logged}
            />

            {/* Creamos una ruta privada para que solo se muestra cuando cuando el usuario
              esta logueado
            */}
            <PrivateRoute
              path="/"  
              component={DashboardRouter}
              isAuthenticated={user.logged}
            />
          </Switch>
        </div>
      </Router>
    )
}
