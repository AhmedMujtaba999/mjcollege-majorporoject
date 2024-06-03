import React, { useState } from 'react'
import axios from 'axios'
function Try() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [captionn, set] = useState("")

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);


        // Show a preview of the selected file
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        try {
            // Implement your upload logic here
            // For example, you can use FormData to send the file to your server
            const formData = new FormData();
            formData.append('image', file);

            // Replace the URL with your upload endpoint
            const repsonse = await axios.post('https://ecf9-35-187-247-252.ngrok-free.app/predict', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })

            const { caption } = repsonse.data
            const idx = caption.indexOf("<unk>")
            if (idx !== -1) {
                caption.splice(idx, 1)
            }
            caption.pop()
            set(caption.join(" "))
        }
        catch (error) {
            console.error('Error occured', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <form onSubmit={handleSubmit}>
                <label htmlFor="file-upload" className="cursor-pointer">
                    <img src="src/assets/upload.jpeg" alt="Upload" className="w-20 h-20" />
                </label>
                <input id="file-upload" type="file" onChange={handleFileChange} className="hidden" />
                {preview && (
                    <div>
                        <img src={preview} alt="Preview" className="mt-4" style={{ width: '300px' }} />
                    </div>
                )}
                <button type="submit" className="mt-4 mb-5 bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
            </form>
            {captionn && <h1 className='text-white'>Generated Caption: {captionn}</h1>}
        </div>
    );
}

export default Try