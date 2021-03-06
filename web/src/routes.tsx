import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from '../src/pages/Landing';
import TeachersList from '../src/pages/TeachersList';
import TeacherForm from '../src/pages/TeacherForm';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/study" component={TeachersList} exact />
            <Route path="/give-classes" component={TeacherForm} exact />
        </BrowserRouter>
    )
}

export default Routes;