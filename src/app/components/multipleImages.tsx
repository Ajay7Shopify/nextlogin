// src/app/components/multipleImages.tsx
import { useState, useRef } from 'react';

type MultipleImagesProps = {
    id: string;
};

const MultipleImages = ({ id }: MultipleImagesProps) => {
    const [imageSrcs, setImageSrcs] = useState<string[]>([]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>,index: number) => {
        const files = event.target.files;
        console.log("handleImageUpload Files :",files ,"index :",index)
        if (files) {
            const imgUrls = Array.from(files).map((file) => URL.createObjectURL(file));
            setImageSrcs((prevImageSrcs) => [...prevImageSrcs, ...imgUrls]);
        }
    };

    const handleImageReset = (index: number) => {
        console.log(`handleImageReset for component ${id} at index:`, index);
        setImageSrcs((prevImageSrcs) => prevImageSrcs.filter((_, i) => i !== index));
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };


    return (
        <div className="flex-1 relative flex flex-wrap justify-center items-center md:mx-4 px-4 md:px-0 mb-4">
            <input
                id={id}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                ref={fileInputRef}
            />
            {imageSrcs.length > 0 ? (
                imageSrcs.map((src, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col items-center mb-4 ${imageSrcs.length === 1
                                ? 'w-full' // Full width on all screens if there's only one image
                                : 'w-full md:w-1/2 lg:w-1/3' // 50% width on medium screens, 33.33% width on large screens
                            }`}
                    >

                        <button
                            onClick={() => handleImageReset(index)}
                            className="absolute top-2 right-10 bg-red-500 text-white rounded-full p-1"
                        >
                            &times;
                        </button>

                        <button
                            onClick={triggerFileInput}
                            className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1"
                        >
                            +
                        </button>

                        <img
                            alt={`Uploaded image ${index + 1} ${id}`}
                            width={400}
                            height={500}
                            decoding="async"
                            className="py-2 border-2 border-black "
                            src={src}
                            style={{ color: 'transparent', objectFit: 'contain' }}
                        />
                    </div>
                ))
            ) : (
                <>
                    <label
                        htmlFor={`af-submit-app-upload-images-${id}`}
                        className="group p-4 sm:p-7 block cursor-pointer md:text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                    >
                        <input
                            id={`af-submit-app-upload-images-${id}`}
                            name={`af-submit-app-upload-images-${id}`}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="sr-only"
                        />
                        <svg
                            className="size-10 mx-auto text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                            />
                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                        </svg>
                        <span className="mt-2 block md:text-sm max-sm:inline max-sm:mr-5 text-gray-800">
                            Browse your device or <span className="group-hover:text-blue-700 text-blue-600">upload Image</span>
                        </span>
                        <span className="mt-1 block md:text-xs max-sm:inline text-gray-500">
                            Maximum file size is 10 MB
                        </span>
                    </label>
                </>
            )}
            <br />
            <br />
        </div>
    )
}

export default MultipleImages