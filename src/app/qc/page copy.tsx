'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

const QualityControlForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  // State for form fields
  const [formData, setFormData] = useState({
    client: 'Trampoline',
    itemDescription: 'Ada Bone Inlay Coffee Table',
    sku: 'BACT00033A',
    poNo: 'N/A',
    qty: '9 pcs',
    factory: 'MEHUL ART & CRAFT',
    inspectedBy: 'KANHAIYA LAL',
    dateOfInspection: '2024-06-05', // Date input format
    inspectionResult: 'Pass',
    constructionApproved: 'N/A',
    materialsApproved: 'N/A',
    colorsFinishApproved: 'N/A',
    aestheticFinishApproved: 'N/A',
    colorConsistency: 'N/A',
    glossFinishApproved: 'N/A',
    skusChecked: 'N/A',
    labelFormatApproved: 'N/A',
    moistureCheck: 'N/A',
    commentsRemarks: 'Size, construction & aesthetic verified with detail.',
    assemblyMatchesAI: 'N/A',
    itemFullyAssembled: 'N/A',
    assemblyStepsClear: 'N/A',
    aiVerbiageApproved: 'N/A',
    hardwarePackMatchesAI: 'N/A',
    partsFitTogether: 'N/A',
    partsLabeled: 'N/A',
    hardwarePackaged: 'N/A',
    hardwareQualityAcceptable: 'N/A',
    antiTipKitRequired: 'N/A',
    preDrilledHolesRequired: 'N/A',
    packagingDetailsChecked: 'N/A',
    grossWeight: '35.500 KG',
    netWeight: '29.300 KG',
    cartonMeasurement: '88X88X54 CM',
    totalCarton: '5',
    countryOfOrigin: 'MADE IN INDIA',
    transitTestRequired: 'N/A',
    silicaGelPack: 'Yes',
    labelingApproved: 'Yes',
    cartonLength: '88 CM',
    cartonWidth: '88 CM',
    cartonHeight: '54 CM',
    imageUpload: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imageUpload: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = () => {
    if (formRef.current) {
      const element = formRef.current;

      // Options for html2pdf
      const opt = {
        margin: 1,
        filename: 'quality_control_form.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      // Generate PDF
      html2pdf()
        .from(element)
        .set(opt)
        .save();
    }
  };

  return (
    <div className="bg-gray-100 p-2 h-screen">
            <div className="flex justify-between items-center overflow-x-auto md:mb-8 p-12 md:p-0"> {/* Added padding and overflow-x-auto */}
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
                <div className="grid lg:flex-col justify-between items-center md:mb-8 bg-gray-400 p-4">
                    <h1 className="text-2xl font-bold">Inspection Report (Furniture)</h1>
                    <h2 className="text-xl font-semibold">Final Inspection</h2>
                </div>
                <div className='flex items-center'>
                    <div className="flex-1"> {/* Equal width for the table */}
                        <table className="min-w-full bg-white border border-gray-200 mb-6">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">1</td>
                                    <td className="px-4 py-2 border font-semibold">Client</td>
                                    <td className="px-4 py-2 border"><input type="text" name="client" /></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">2</td>
                                    <td className="px-4 py-2 border font-semibold">Item Descriptions</td>
                                    <td className="px-4 py-2 border"><input type="text" name="Descriptions" /></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">3</td>
                                    <td className="px-4 py-2 border font-semibold">SKU</td>
                                    <td className="px-4 py-2 border"><input type="number" name="SKU" /></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">4</td>
                                    <td className="px-4 py-2 border font-semibold">PO No.</td>
                                    <td className="px-4 py-2 border"><input type="number" name="PO" /></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">5</td>
                                    <td className="px-4 py-2 border font-semibold">Qty.</td>
                                    <td className="px-4 py-2 border font-semibold flex items-center"><input type="number" name="qty" />pcs</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">6</td>
                                    <td className="px-4 py-2 border font-semibold">Factory</td>
                                    <td className="px-4 py-2 border"><input type="text" name="Factory" /></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">7</td>
                                    <td className="px-4 py-2 border font-semibold">Inspected By</td>
                                    <td className="px-4 py-2 border"><input type="text" name="InspectedBy" /></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">8</td>
                                    <td className="px-4 py-2 border font-semibold">Date & Time of Inspection</td>
                                    <td className="px-4 py-2 border"><input type="datetime-local" name="date&time" /></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border font-semibold">9</td>
                                    <td className="px-4 py-2 border font-semibold">Inspection Result</td>
                                    <td className="px-4 py-2 border" colSpan="2"> {/* Use colSpan to merge cells for the dropdown */}
                                        <select name="inspectionResult" className="border rounded p-1">
                                            <option value="">Select Result</option>
                                            <option value="PASS">Pass</option>
                                            <option value="FAIL">Fail</option>
                                        </select>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="flex-1 relative flex justify-center items-center"> {/* Equal width for the image */}
                        {imageSrc ? (
                            <div className="relative w-full flex flex-col items-center">
                                <button
                                    onClick={handleImageReset}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                >
                                    &times; {/* Close button */}
                                </button>
                                <Image
                                    src={imageSrc}
                                    quality={100}
                                    width={400}
                                    height={500}
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                    alt="Uploaded Logo"
                                    className="py-2 border-gray-200"
                                />
                            </div>
                        ) : (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="mb-4 items-center"
                            />
                        )}
                    </div>
                </div>

                <h3 className="text-lg font-semibold mb-4">Construction, Aesthetic, Finishing & Product Labelling</h3>
                <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Field</th>
                            <th className="px-4 py-2 border">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">1</td>
                            <td className="px-4 py-2 border">Construction of the item was made according to Approved Sample?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">2</td>
                            <td className="px-4 py-2 border">The materials of the item are all according to the client's approved specifications.</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">3</td>
                            <td className="px-4 py-2 border">Colors/finish of the bulk production is as per the approved finish Swatch.</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">4</td>
                            <td className="px-4 py-2 border">Aesthetic, distressing, and antiquing finished are as per the approved sample & finish swatch?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">5</td>
                            <td className="px-4 py-2 border">Color/finish of the production units are even and consistent.</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">6</td>
                            <td className="px-4 py-2 border">Gloss/Sheen finished off the production units are per the approved finish swatch?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">7</td>
                            <td className="px-4 py-2 border">Have you gathered all the SKUs/styles of the collection and compared overall color and gloss finish; to ensure color and gloss are event and consistent?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">8</td>
                            <td className="px-4 py-2 border">The format and statement content of the Warning, Cautionary, and Regulatory labels are as per the client's approval?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">9</td>
                            <td className="px-4 py-2 border">Have you performed the moisture check on the wooden parts of the item?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                    </tbody>
                </table>

                <p className="mb-6">Goods offered for the inspection. The goods were inspected 100 % and found satisfactory.</p>

                <h3 className="text-lg font-semibold mb-4">Overall Construction and Finish Verified and Found Satisfactory</h3>
                <div className="mb-6">
                    <p className="mb-2"><span className="font-semibold">Dia:</span> 80 cm</p>
                    <p><span className="font-semibold">Height:</span> 46 cm</p>
                </div>

                <p className="mb-6">Comments & Remarks: Size, construction & aesthetic verified with detail.</p>

                <h3 className="text-lg font-semibold mb-4">Assembly Instruction and Product Assembly of Knock-Down Item</h3>
                <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">Assembly of the production units matches the "step-by-step" AI of the item?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Item can be fully assembled by several persons indicated as per AI?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Assembly steps are not confusing and easy to understand.</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Verbiage and format of the AI; as per the client's approved version?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Tools, fittings, and accessories of the hardware pack matched with AI?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">All parts, fittings, hardware, and accessories fit together well.</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Parts are lettered/numbered and matched with assembly instructions?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">All hardware is packaged together and easy to locate in the carton.</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Material Quality of the Hardware, fittings, and accessories of the item are acceptable? (Not easily bend, deform, and broken during and after assembly)</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Does the item require an anti-tip kit?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Does a pre-drilled hole required for the item; to secure the tip-kit?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mb-6">Comments & Remarks: The product is fixed, doesn't require assembly.</p>

                <h3 className="text-lg font-semibold mb-4">Master & Inner Carton (Details & Labeling)</h3>
                <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">SKU #</td>
                            <td className="px-4 py-2 border">YES BACT00033A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">PO #</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Item Description</td>
                            <td className="px-4 py-2 border">YES Ada Bone Inlay Coffee Table</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Gross Weight</td>
                            <td className="px-4 py-2 border">YES 35.500 KG</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Net Weight</td>
                            <td className="px-4 py-2 border">YES 29.300 KG</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Carton Measurement</td>
                            <td className="px-4 py-2 border">YES 88X88X53 CM</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Total Carton</td>
                            <td className="px-4 py-2 border">YES 5</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Regulatory Label</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Shipping Mark</td>
                            <td className="px-4 py-2 border">YES</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Country of Origin</td>
                            <td className="px-4 py-2 border">YES MADE IN INDIA</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mb-6">Have you checked and verified the packaging details?</p>

                <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">Does a transit test require for the item?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">If yes, please mention Test report no.</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Packing methods as per the test report?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Polybag as per the client's standard?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Warning or cautionary Statement if required?</td>
                            <td className="px-4 py-2 border">N/A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Silica /Gel pack as per the client’s standard?</td>
                            <td className="px-4 py-2 border">Yes</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Labeling, ticketing, and hang tag of the item are as per client approval?</td>
                            <td className="px-4 py-2 border">Yes</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mb-6">Random Carton marking checked and found satisfactory</p>

                <table className="min-w-full bg-white border border-gray-200 mb-6">
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">Carton Length</td>
                            <td className="px-4 py-2 border">88 CM</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Carton width</td>
                            <td className="px-4 py-2 border">88 CM</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Carton Height</td>
                            <td className="px-4 py-2 border">54 CM</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Gross weight</td>
                            <td className="px-4 py-2 border">35.500 KG</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Net weight</td>
                            <td className="px-4 py-2 border">29.300 KG</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-center mt-8">
                    <img src="https://quickstart-f6312eac.myshopify.com/cdn/shop/files/21_feb_lifestyle_14.jpg?v=1721204162&width=1214" alt="Inspection Image" className="w-full max-w-md h-auto object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div>
        
  );
};

export default QualityControlForm;