import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar';
import ClientList from '../components/clientList';
import withAuth from '../funtions/withAuth';
import { PlusIcon } from '@heroicons/react/24/solid';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const VideoList = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [newClient, setNewClient] = useState({ names: '', emails: '' });

    const handleAddClient = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${backendUrl}/client/add-clients/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newClient),
            });
            if (response.ok) {
                setMessage('Client added successfully');
                setShowModal(false);
                fetchClients();
                // Actualizar la lista de clientes si es necesario
            } else {
                setMessage('Failed to add client');
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        }
    };

    const fetchClients = async () => {
        try {
            const response = await axios.get(`${backendUrl}/client/search-clients/`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Asumiendo que el token está almacenado en localStorage
                }
            });
            setUsers(response.data);
            console.log(response.data)
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <div className="ml-20">
            <Sidebar />
            <div>
                
            </div>
        </div>
    );
};
export default withAuth(VideoList);

