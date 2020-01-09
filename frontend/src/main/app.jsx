import '../common/template/depeendeences'
import React from 'react';

import Header from '../common/template/header';
import SideBar from '../common/template/sideBar';
import Footer from '../common/template/footer';

export default props => (
    <div className={'wrapper'}>
        <SideBar/>
       <Header/>
       <div className={'content-wrapper'}>
           <h1>Conteudo</h1>
       </div>

        <Footer/>
    </div>
)