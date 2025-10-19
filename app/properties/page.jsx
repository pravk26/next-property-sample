import PropertyCard from '@/components/PropertyCard';
import dbConnection from '@/config/dbConnection';
import Property from '@/models/property';

const PropertyPage = async () => {
    await dbConnection();
    const properties = await Property.find({}).lean();
    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {properties.length < 1 ? (
                    <p>No properties found</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {properties.map((property, idx) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
};

export default PropertyPage;