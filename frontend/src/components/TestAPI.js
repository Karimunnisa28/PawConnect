import React, { useState, useEffect } from "react";
import { authService } from "../api/services/authService";
import { petService } from "../api/services/petService";
import { serviceService } from "../api/services/serviceService";
import { adoptionService } from "../api/services/adoptionService";

const TestAPI = () => {
    const [status, setStatus] = useState({});

    const testConnections = async () => {
        const results = {};

        try {
            // Test Pets API
            const petsResponse = await petService.getAllPets();
            results.pets = "Success ✅";
        } catch (error) {
            results.pets = `Error ❌: ${error.message}`;
        }

        try {
            // Test Services API
            const servicesResponse = await serviceService.getAllServices();
            results.services = "Success ✅";
        } catch (error) {
            results.services = `Error ❌: ${error.message}`;
        }

        try {
            // Test Adoptions API
            const adoptionsResponse = await adoptionService.getAllAdoptions();
            results.adoptions = "Success ✅";
        } catch (error) {
            results.adoptions = `Error ❌: ${error.message}`;
        }

        setStatus(results);
    };

    useEffect(() => {
        testConnections();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>API Connection Test</h2>
            <div style={{ marginTop: "20px" }}>
                {Object.entries(status).map(([key, value]) => (
                    <div key={key} style={{
                        padding: "10px",
                        margin: "10px 0",
                        backgroundColor: value.includes("Success") ? "#d4edda" : "#f8d7da",
                        borderRadius: "4px"
                    }}>
                        <strong>{key}:</strong> {value}
                    </div>
                ))}
            </div>
            <button 
                onClick={testConnections}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "20px"
                }}
            >
                Test Connections
            </button>
        </div>
    );
};

export default TestAPI;
