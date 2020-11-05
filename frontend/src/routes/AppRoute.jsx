import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import Home from '../pages/Home';
import Compter from '../pages/Compter';
import Mypage from '../pages/Mypage';
import '../index.css';

export default function AppRoute() {
  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/home" component={Home} />
      <Route path="/compter" component={Compter} />
      <Route path="/mypage" component={Mypage} />
    </>
  );
}

