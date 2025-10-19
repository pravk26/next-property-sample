import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import InfoBoxes from '@/components/InfoBoxes';
import dbConnection from '@/config/dbConnection';

const HomePage = async () => {
    await dbConnection();
    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    )
};

export default HomePage;