"use client";
import { useState, useEffect } from "react";

export default function useWebSocket(url, handleMessage) {
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Create a WebSocket connection
        const socket = new WebSocket(url);

        socket.onopen = () => {
            setIsConnected(true);
            setWs(socket)
            console.log("WebSocket connection established");
        };

        socket.onclose = () => {
            setIsConnected(false);
            setWs(null);
            console.log("WebSocket connection closed");
        };

        socket.onmessage = (event) => {
            // setMessage(event.data);
            handleMessage(event.data)
            console.log("Message from server: ", event.data);
        };

        socket.onerror = (error) => {
            console.error("WebSocket error: ", error);
        };

        // Cleanup when the component is unmounted
        return () => {
            socket.close();
        };
    }, [url]);

    // Function to send messages
    const sendMessage = (msg) => {
        if (ws && isConnected) {
            ws.send(msg);
            console.log("message sent: " + msg)
        }
    };

    return {
        isConnected,
        message,
        sendMessage,
    };
}
