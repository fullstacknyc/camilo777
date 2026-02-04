"use client";

import { useState, useEffect } from 'react'

const notes = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 mt-20">
            <h1>Notes App</h1>
            <div>
                <input type="text" placeholder="Title" className="w-full p-2 border rounded mb-4" />
                <input type="text" placeholder="Content" className="w-full p-2 border rounded mb-4" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Note</button>
            </div>
        </div>
    )
}

export default notes;