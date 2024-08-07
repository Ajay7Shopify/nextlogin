'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import DropdownRadio from '../pass/page';
import MultipleImages from '../components/multipleImages';


const QualityControlForm = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = () => {
        if (formRef.current) {
            const element = formRef.current;
            html2pdf().from(element).save('quality_control_form.pdf');
        }
    };

    

    return (
        <div className="bg-gray-100 md:p-2 h-screen max-sm:p-1">
            <div className="flex justify-evenly mt-6 md:justify-between md:items-center items-start md:mt-8 p-3 md:p-12 md:p-0 ">
                <Image
                    src="https://trampolinestore.uk/cdn/shop/files/transparent_logo_black_2.png?v=1702358997&width=180"
                    width={70}
                    height={70}
                    alt="Trampoline Store Logo"
                    className="p-4 lg:py-2"
                />
                <button
                    onClick={handleDownloadPDF}
                    className="bg-white hover:bg-orange-400 text-black font-bold py-2 px-4 rounded transition duration-200"
                >
                    <Image
                        src="/pdf-svgrepo-com.png"
                        alt="Download PDF"
                        width={20}
                        height={20}
                        priority
                    />
                </button>
            </div>
            <div ref={formRef} className="max-w-fit mx-auto bg-white p-2 sm:p-8 ">
                <div className="flex justify-between items-center md:mb-8 bg-gray-400 pr-0 px-2 py-1 md:p-4">
                    <h1 className="text-sm md:text-2xl font-bold">Inspection Report (Furniture)</h1>
                    <h2 className="text-sm md:text-2xl font-semibold mr-2 md:mr-0">Final Inspection</h2>
                </div>
                <div className='md:flex md:items-center w-full'>
                    <div className="flex-1"> {/* Equal width for the table */}
                        <table className="min-w-0 md:min-w-full bg-white border border-gray-200 mb-6">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">1</td>
                                    <td className="px-2 py-2 border font-semibold">Client</td>
                                    <td className="px-2 m-2 border">
                                        <input className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="text" name="client" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">2</td>
                                    <td className="px-2 py-2 border font-semibold">Item Descriptions</td>
                                    <td className="px-2 py-2 border">
                                        <textarea className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="6" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">3</td>
                                    <td className="px-2 py-2 border font-semibold">SKU</td>
                                    <td className="px-2 py-2 border">
                                        <input className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="SKU" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">4</td>
                                    <td className="px-2 py-2 border font-semibold">PO No.</td>
                                    <td className="px-2 py-2 border">
                                        <input className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="PO" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">5</td>
                                    <td className="px-2 py-2 border font-semibold">Qty.</td>
                                    <td className="px-2 py-2 border font-semibold flex items-center">
                                        <input className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="qty" /> <span className='ml-2'>pcs</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">6</td>
                                    <td className="px-2 py-2 border font-semibold">Factory</td>
                                    <td className="px-2 py-2 border">
                                        <input className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="text" name="Factory" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">7</td>
                                    <td className="px-2 py-2 border font-semibold">Inspected By</td>
                                    <td className="px-2 py-2 border">
                                        <input className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="text" name="InspectedBy" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">8</td>
                                    <td className="px-2 py-2 border font-semibold">Date & Time of Inspection</td>
                                    <td className="px-2 py-2 border">
                                        <input className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="datetime-local" name="date&time" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 border font-semibold">9</td>
                                    <td className="px-2 py-2 border font-semibold">Inspection Result</td>
                                    <td className="px-2 py-2 border" colSpan="2">
                                        <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <MultipleImages />
                </div>

                <div className="justify-between items-center md:mb-8 bg-gray-400 pr-0 py-1">
                    <h1 className="text-sm md:text-2xl font-bold text-center">Construction, Aesthetic, Finishing & Product Labelling</h1>

                    <table className="min-w-full bg-white border border-gray-200 mb-6">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">1</td>
                                <td className="px-4 py-2 border">Construction of the item was made according to Approved Sample?</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">2</td>
                                <td className="px-4 py-2 border">The materials of the item are all according to the client&apos;s approved specifications.</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">3</td>
                                <td className="px-4 py-2 border">Colors/finish of the bulk production is as per the approved finish Swatch.</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">4</td>
                                <td className="px-4 py-2 border">Aesthetic, distressing, and antiquing finished are as per the approved sample & finish swatch?</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">5</td>
                                <td className="px-4 py-2 border">Color/finish of the production units are even and consistent.</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">6</td>
                                <td className="px-4 py-2 border">Gloss/Sheen finished off the production units are per the approved finish swatch?</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">7</td>
                                <td className="px-4 py-2 border">Have you gathered all the SKUs/styles of the collection and compared overall color and gloss finish; to ensure color and gloss are event and consistent?</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">8</td>
                                <td className="px-4 py-2 border">The format and statement content of the Warning, Cautionary, and Regulatory labels are as per the client&apos;s approval?</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">9</td>
                                <td className="px-4 py-2 border">Have you performed the moisture check on the wooden parts of the item?</td>
                                <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border-2 border-black mb-3">
                    <MultipleImages />
                    <p className="mb-6 border-t-2 border-black md:flex md:items-center md:justify-center font-medium text-sm text-center mt-4 pt-3 ">
                        Goods offered for the inspection. <br />The goods were inspected 100 % and found satisfactory.
                    </p>
                </div>

                <MultipleImages id="image-upload-1" key="1" />

                <h3 className="mb-6 border-2 border-black md:flex md:items-center md:justify-center font-medium text-sm text-center mt-4 pt-3 ">Overall Construction and Finish Verified and Found Satisfactory</h3>
                
                <div className="mb-6 border-t-2 border-black">
                <MultipleImages id="image-upload-2" key="2"/>
                    <p className="border-2 border-black flex md:items-center md:justify-center font-medium "><span className='mr-2 ml-2 py-2'>Dia:</span>  <input className=" mx-2 px-3 block w-3/12 lg:w-1/6 max-sm:h-3  border-gray-200 shadow-sm text-sm lg:rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="dia" placeholder='80 cm' /></p>
                    <MultipleImages id="image-upload-3" key="3"/>
                    <p className="border-2 border-black flex md:items-center md:justify-center font-medium "><span className='mr-2 ml-2 py-2'>Height:</span> <input className="mx-2 px-3 block w-3/12 lg:w-1/6 max-sm:h-3  border-gray-200 shadow-sm text-sm lg:rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="height" placeholder='46 cm' /></p>
                </div>

                <p className="mb-6 font-semibold border-2 border-black p-2">Comments & Remarks: Size, construction & aesthetic verified with detail.</p>

                <div className="flex justify-between items-center md:mb-8 bg-gray-400 pr-0 px-2 py-1 md:p-4">
                <h1 className="text-sm md:text-2xl font-bold">Assembly Instruction and Product Assembly of Knock-Down Item</h1>
                </div>
              
                <table className="min-w-full bg-white border border-gray-200 mb-6">
                <tbody>
                <tr>
                    <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">1</td>
                            <td className="px-4 py-2 border">Assembly of the production units matches the "step-by-step" AI of the item?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">2</td>
                            <td className="px-4 py-2 border">Item can be fully assembled by several persons indicated as per AI?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">3</td>
                            <td className="px-4 py-2 border">Assembly steps are not confusing and easy to understand.</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">4</td>
                            <td className="px-4 py-2 border">Verbiage and format of the AI; as per the client&apos;s approved version?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">5</td>
                            <td className="px-4 py-2 border">Tools, fittings, and accessories of the hardware pack matched with AI?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">6</td>
                            <td className="px-4 py-2 border">All parts, fittings, hardware, and accessories fit together well.</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">7</td>
                            <td className="px-4 py-2 border">Parts are lettered/numbered and matched with assembly instructions?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">8</td>
                            <td className="px-4 py-2 border">All hardware is packaged together and easy to locate in the carton.</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">9</td>
                            <td className="px-4 py-2 border">Material Quality of the Hardware, fittings, and accessories of the item are acceptable? (Not easily bend, deform, and broken during and after assembly)</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">10</td>
                            <td className="px-4 py-2 border">Does the item require an anti-tip kit?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px]">11</td>
                            <td className="px-4 py-2 border">Does a pre-drilled hole required for the item; to secure the tip-kit?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Pass"} option2={"Fail"} /> </td>
                        </tr>
                    </tbody>
                </table>
                <MultipleImages id="image-upload-4" key="4"/>
                <p className="mb-6 border-2 border-black md:flex md:items-center md:justify-center font-medium text-sm text-center mt-4 pt-3 ">
                Comments & Remarks: The product is fixed, doesn't require assembly.</p>

                <div className="flex justify-between items-center md:mb-8 bg-gray-400 pr-0 px-2 py-1 md:p-4">
                <h1 className="text-sm md:text-2xl font-bold">Master & Inner Carton (Details & Labeling)</h1>
                </div>
                <div className='md:flex md:items-center w-full'>
                    <div className="flex-1 lg:flex overflow-x-auto w-[350px] md:min-w-full"> 
                <table className=" min-w-0 md:min-w-max bg-white border border-gray-200 mb-6">
                    <tbody >
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">1</td>
                            <td className="px-4 py-2 border">SKU #</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border-2 border-black shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="text" name="SKU#<" placeholder='Enter SKU Code' /></td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">2</td>
                            <td className="px-4 py-2 border">PO #</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="text" name="PO#<" placeholder='Enter PO' /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">3</td>
                            <td className="px-4 py-2 border">Item Description</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="text" name="Description" placeholder='Enter Item Description like Ada Bone Inlay Coffee Table' /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">4</td>
                            <td className="px-4 py-2 border">Gross Weight</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Gross Weight" placeholder='Enter Gross Weight' /> </td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">5</td>
                            <td className="px-4 py-2 border">Net Weight</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Net Weight" placeholder='Enter Net Weight' /> </td>
                
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">6</td>
                            <td className="px-4 py-2 border">Carton Measurement</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Carton Measurement" placeholder='Enter Carton Measurement' /> </td>
                      </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">7</td>
                            <td className="px-4 py-2 border">Total Carton</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Total Carton" placeholder='Enter Total Carton' /> </td>
                    </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">8</td>
                            <td className="px-4 py-2 border">Regulatory Label</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="text" name="Regulatory Label" placeholder='Enter Regulatory Label' /> </td>
                     </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">9</td>
                            <td className="px-4 py-2 border">Shipping Mark</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="text" name="Shipping Mark" placeholder='Enter Shipping Mark' /> </td>
                                  </tr>
                        <tr>
                        <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]">10</td>
                            <td className="px-4 py-2 border">Country of Origin</td>
                            <td className="px-4 py-2 border w-[3px] sm:w-[2px] md:w-[30px] lg:w-[40px]"><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                            <td className="px-4 py-2 border"><input className=" px-3 block max-sm:w-[600px] w-full border shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Country of Origin" placeholder='Country of Origin' /> </td>
                     </tr>
                    </tbody>
                </table>
                <MultipleImages id="image-upload-5" key="5" />
                </div>
                </div>
                <p className="mb-6 border-2 border-black md:flex font-medium text-sm text-center mt-4 pt-3 lg:px-6">
                    Have you checked and verified the packaging details?</p>

                <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <tbody>
                        <tr>
                           <td className="px-2 py-2 border">1</td>
                            <td className="px-4 py-2 border">Does a transit test require for the item?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-2 py-2 border">2</td>
                            <td className="px-4 py-2 border">If yes, please mention Test report no.</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-2 py-2 border">3</td>
                            <td className="px-4 py-2 border">Packing methods as per the test report?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-2 py-2 border">4</td>
                            <td className="px-4 py-2 border">Polybag as per the client&apos;s standard?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-2 py-2 border">5</td>
                            <td className="px-4 py-2 border">Warning or cautionary Statement if required?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-2 py-2 border">6</td>
                            <td className="px-4 py-2 border">Silica /Gel pack as per the client’s standard?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                        </tr>
                        <tr>
                        <td className="px-2 py-2 border">7</td>
                            <td className="px-4 py-2 border">Labeling, ticketing, and hang tag of the item are as per client approval?</td>
                            <td><DropdownRadio  na= {"N/A"} option1={"Yes"} option2={"No"} /> </td>
                        </tr>
                    </tbody>
                </table>
                <MultipleImages id="image-upload-6" key="6"/>

                <p className="mb-6 border-2 border-black md:flex font-medium text-sm text-center mt-4 pt-3 lg:px-6">
                    Random Carton marking checked and found satisfactory</p>
                    <MultipleImages id="image-upload-7" key="7"/>

                    <p className="mb-6 border-2 border-black md:flex font-medium text-sm text-center mt-4 pt-3 lg:px-6">
                    Overall internal packaging review and found satisfactory. </p>
                    <MultipleImages id="image-upload-8" key="8"/>


                    <p className="border-2 border-black flex md:items-center md:justify-center font-medium "><span className='mr-2 ml-2 py-2'>Carton Length :</span>  <input className=" mx-2 px-3 block w-3/12 lg:w-1/6 max-sm:h-3  border-gray-200 shadow-sm text-sm lg:rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Carton Length" placeholder='78 cm' /></p>
                    <MultipleImages id="image-upload-9" key="9"/>

                    <p className="border-2 border-black flex md:items-center md:justify-center font-medium "><span className='mr-2 ml-2 py-2'>Carton Width :</span>  <input className=" mx-2 px-3 block w-3/12 lg:w-1/6 max-sm:h-3  border-gray-200 shadow-sm text-sm lg:rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Carton Width" placeholder='50 cm' /></p>
                    <MultipleImages id="image-upload-10" key="10"/>

                    <p className="border-2 border-black flex md:items-center md:justify-center font-medium "><span className='mr-2 ml-2 py-2'>Carton Weight :</span>  <input className=" mx-2 px-3 block w-3/12 lg:w-1/6 max-sm:h-3  border-gray-200 shadow-sm text-sm lg:rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Carton Weight" placeholder='99 cm' /></p>
                    <MultipleImages id="image-upload-11" key="11"/>

                    <p className="border-2 border-black flex md:items-center md:justify-center font-medium "><span className='mr-2 ml-2 py-2'>Gross weight :</span>  <input className=" mx-2 px-3 block w-3/12 lg:w-1/6 max-sm:h-3  border-gray-200 shadow-sm text-sm lg:rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Gross weight" placeholder='45 cm' /></p>
                    <MultipleImages id="image-upload-12" key="12" />

                    <p className="border-2 border-black flex md:items-center md:justify-center font-medium "><span className='mr-2 ml-2 py-2'>Net weight :</span>  <input className=" mx-2 px-3 block w-3/12 lg:w-1/6 max-sm:h-3  border-gray-200 shadow-sm text-sm lg:rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            type="number" name="Net weight" placeholder='29 kg' /></p>
                    <MultipleImages id="image-upload-13" key="13" />
    
            </div>
        </div>

    )
}

export default QualityControlForm