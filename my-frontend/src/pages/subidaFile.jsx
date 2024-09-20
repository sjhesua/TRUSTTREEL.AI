import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar';
import ClientList from '../components/clientList';

const UploadExcel = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [newClient, setNewClient] = useState({ names: '', emails: '' });

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleAddClient = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/client/add-clients/', {
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
                // Actualizar la lista de clientes si es necesario
            } else {
                setMessage('Failed to add client');
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8000/client/upload-excel/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.success || 'File uploaded successfully');
            setUsers(response.data.added_clients);
            console.log(response.data.added_clients)
        } catch (error) {
            setMessage(error.response.data.error || 'Error uploading file');
        }
    };

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:8000/client/search-clients/', {
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

        fetchClients();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <div>
            <Sidebar />
            <h2 className="text-2xl font-bold mb-6 mt-6">Upload Excel File</h2>

            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full bg-j-pink">Upload</button>
            </form>

            {message && <p>{message}</p>}

            <button
                onClick={() => setShowModal(true)}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 rounded-full bg-j-pink"
            >
                Add Client
            </button>

            <ClientList clients={users} />

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Add Client
                                        </h3>
                                        <div className="mt-2">
                                            <form onSubmit={handleAddClient}>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={newClient.name}
                                                        onChange={(e) => setNewClient({ ...newClient, names: e.target.value })}
                                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <div className="mt-4">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value={newClient.email}
                                                        onChange={(e) => setNewClient({ ...newClient, emails: e.target.value })}
                                                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <div className="mt-4">
                                                    <button
                                                        type="submit"
                                                        className="bg-blue-500 text-white px-4 py-2 rounded-full bg-j-pink"
                                                    >
                                                        Add
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                        className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-full "
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadExcel;

