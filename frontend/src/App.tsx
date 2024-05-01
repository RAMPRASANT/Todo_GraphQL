import React, { type FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';

import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import LandingPage from './components/LandingPage';
import TodoListsDashboard from './components/TodoListsDashboard';

const client = new ApolloClient({
    // dataIdFromObject: o => o.id,
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
})

const App: FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className='App'>
                <header className='App-header'>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/dashboard" element={<TodoListsDashboard />} />
                        </Routes>
                    </BrowserRouter>
                </header>
            </div>
        </ApolloProvider>
    )
}

export default App;