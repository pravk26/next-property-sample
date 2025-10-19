import dbConnection from "@/config/dbConnection";
import Property from "@/models/property";
import PropertyBannerImage from "@/components/PropertyBannerImage";
import PropertyDetailsPage from "@/components/PropertyDetails";
import { FaArrowLeft } from 'react-icons/fa';
import Link from "next/link";

const AddPropertyPage = async ({ params }) => {
    const { id } = await params;
    await dbConnection();
    const property = await Property.findById(id).lean();
    return (
        <>
            <PropertyBannerImage image={property.images[0]} />
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        href="/properties"
                        className="text-blue-500 hover:text-blue-600 flex items-center"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Properties
                    </Link>
                </div>
            </section>
            <section className="bg-blue-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid layout-7030 w-full gap-6">
                        {/* property details */}
                        <PropertyDetailsPage property={property} />
                    </div>
                </div>
            </section>
            <div>{property.name}</div>
        </>

    )
};

export default AddPropertyPage;