'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const style = {
    display: 'block',
    margin: '100px auto'
}
const LoadingPage = () => {
    return (
        <ClipLoader
            color='#3b83f6'
            cssOverride={style}
            size={150}
            aria-label='loading spinner'
        />
    )
}

export default LoadingPage;