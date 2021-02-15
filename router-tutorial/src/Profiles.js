import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import Profile from './Profile'

const Profiles = () => {
    return (
        <div>
            <h3>유저목록:</h3>
            <ul>
                <li>
                    <NavLink to="/profiles/junseong" activeStyle={{ background: 'black', color: 'white' }}>junseong</NavLink>
                </li>
                <li>
                <NavLink to="/profiles/gildong" activeStyle={{ background: 'black', color: 'white' }}>gildong</NavLink>
                </li>
            </ul>
            <Route path="/profiles" exact render={()=><div>유저를 선택해 주세요.</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    )
}

export default Profiles;