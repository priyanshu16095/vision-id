import React, { useState } from 'react'
import Navbar from './Navbar'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from './Footer';

function Home() {
    const faq_data = [
        { question: 'What happen to the images I have uploaded to VisionID?', answer: 'Any images you have sent to PimEyes are permanently removed within 48 hours. We do not store any private data from our users. Searching with PimEyes is safe and protected' },
        { question: 'What happen to the images I have uploaded to VisionID?', answer: 'Any images you have sent to PimEyes are permanently removed within 48 hours. We do not store any private data from our users. Searching with PimEyes is safe and protected' },
        { question: 'What happen to the images I have uploaded to VisionID?', answer: 'Any images you have sent to PimEyes are permanently removed within 48 hours. We do not store any private data from our users. Searching with PimEyes is safe and protected' },
        { question: 'What happen to the images I have uploaded to VisionID?', answer: 'Any images you have sent to PimEyes are permanently removed within 48 hours. We do not store any private data from our users. Searching with PimEyes is safe and protected' },
        { question: 'What happen to the images I have uploaded to VisionID?', answer: 'Any images you have sent to PimEyes are permanently removed within 48 hours. We do not store any private data from our users. Searching with PimEyes is safe and protected' },
    ]
    return (
        <div>
            <Navbar />
            <div className="center-both container"><Hero /></div>
            <div className="center-both container"><Help /></div>
            <div className="center-both container"><Accordion title={'FAQs'} data={faq_data} /></div>
        </div>
    )
}

export default Home

function Hero() {
    return (
        <div className="hero flex-v gap-lg text-center">
            <div className="flex-v gap">
                <p className="font-lg bold">Face Recognition System</p>
                <p className="font bold">Your face, your key to ultimate security.</p>
            </div>
            <div className='flex-v gap text-center'>
                <p className="font">Upload photo and find out where images are published</p>
                <button className='upload__button'><div className="flex-h gap-md"><CameraAltIcon /> UPLOAD PHOTO</div> <SearchIcon /></button>
                <p>Or you can take a photo with the device’s camera. Don’t worry, we will not store it!</p>
            </div>
        </div>
    )
}

function Help() {
    return (
        <div className='help flex-v gap-lg'>
            <p className="font-lg">How VisionID can help you?</p>
            <div className="help__text font flex-v gap">
                <p>PimEyes is an online face search engine that goes through the Internet to find pictures containing given faces. PimEyes uses face recognition search technologies to perform a reverse image search.</p>
                <p>Find a face and check where the image appears online. Our face finder helps you find a face and protect your privacy. Facial recognition online system allows you to search by image.</p>
                <p>Using the latest technologies, artificial intelligence and machine learning, we help you find your pictures on the Internet and defend yourself from scammers, identity thieves, or people who use your image illegally.</p>
                <p>Using the latest technologies, artificial intelligence and machine learning, we help you find your pictures on the Internet and defend yourself from scammers, identity thieves, or people who use your image illegally.</p>
                <p>PimEyes is a face picture search and photo search engine available for everyone. It is a great tool to audit copyright infringement.</p>
            </div>
        </div>
    )
}

function Accordion({ title, data }) {
    const [multipleId, setMultipleId] = useState([])

    function handleMultiSelection(id) {
        const temp = [...multipleId]
        const indexOfItem = temp.indexOf(id)
        if (indexOfItem != -1) {
            temp.splice(indexOfItem, 1)
        } else {
            temp.push(id)
        }
        setMultipleId(temp)
    }
    function show(id) {
        const indexOfItem = multipleId.indexOf(id)
        if (indexOfItem === -1) return false
        return true
    }

    return (
        <div className='accordion flex-v gap-lg'>  
            <p className="font-lg">{title}</p>
            <div className='accordion__items flex-v gap-lg'>
                {data && data.length ?
                    data.map((item, index) => {
                        return (
                            <div className="accordion__item cursor flex-v gap-sm" key={index}>
                                <div className="accordion__header flex-s gap-sm" onClick={() => handleMultiSelection(index)}>
                                    <p className="font">{item.question}</p>
                                    {multipleId.indexOf(index) === index ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                                </div>
                                {show(index) && <p className="accordion__answer">{item.answer}</p>}
                            </div>
                        )
                    })
                    : null}
            </div>
        </div>
    )
}