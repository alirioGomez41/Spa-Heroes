import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';
export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route path="/hero/:heroeId" exact  component={ HeroScreen }/>
                    <Route path="/marvel" exact  component={ MarvelScreen }/>
                    <Route path="/dc" exact  component={ DcScreen }/>
                    <Route path="/search" exact  component={ SearchScreen }/>
                    {/* <Redirect to="/"/> */}
                     <Redirect to="/marvel"/>
                </Switch>
                {/* <h2>Soy el / sin el  Redirect to="/marvel"</h2> */}
            </div>
        </>
    )
}
