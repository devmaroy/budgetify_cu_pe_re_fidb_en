import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ( { startLogin } ) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <div className="box-layout_content">
                <h1 className="box-layout__title">Budgetify</h1>
                <p>Manage your expenses today!</p>
                <button className="button button--social button--google box-layout__button" onClick={ startLogin }>Login with Google</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = ( dispatch ) => ({
    startLogin: () => dispatch( startLogin() )
});

export default connect( undefined, mapDispatchToProps )( LoginPage );