import React from 'react';
import {useNavigate} from "react-router-dom";


const navigate = useNavigate();
const Card = ({ title, description, imageUrl, buttonLabel, onClick }) => {
    return (
        <div className="cursor-pointer group relative flex flex-col my-2 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                    className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                    src={imageUrl}
                    alt={title}
                />
            </div>
            <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
                <p className="text-slate-600 leading-normal font-light">{description}</p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
                <button
                    className="rounded-md bg-teal-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={onClick}
                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
};


const CardGrid = () => {
    const cardData = [
        {
            title: "Common Cold",
            description: "A viral infection affecting the nose and throat, causing symptoms like coughing, sneezing, sore throat, and congestion.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1661559022072-96f9f09a6f4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            buttonLabel: "Analyze Cold Symptoms",
            onClick: () => alert("Analyzing Common Cold Symptoms"),
        },
        {
            title: "Influenza (Flu)",
            description: "A viral infection that affects the respiratory system, with symptoms including fever, chills, body aches, fatigue, and cough.",
            imageUrl: "https://images.unsplash.com/photo-1576765975150-a65eea506b49?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            buttonLabel: "Analyze Flu Symptoms",
            onClick: () => alert("Analyzing Flu Symptoms"),
        },
        {
            title: "Diabetes",
            description: "A chronic condition characterized by high blood sugar levels. Includes Type 1 and Type 2 diabetes, affecting insulin production and usage.",
            imageUrl: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12587/44d861d9-f776-4432-a9f2-fb18ba3d580a.jpg",
            buttonLabel: "Analyze Diabetes Symptoms",
            onClick: () => alert("Analyzing Diabetes Symptoms"),
        },
        {
            title: "Hypertension (High Blood Pressure)",
            description: "A condition where blood pressure in the arteries is consistently too high, which can lead to serious health complications.",
            imageUrl: "https://cdn.britannica.com/99/144299-050-B23B9E10/Nurse-sphygmomanometer-patient-blood-pressure.jpg",
            buttonLabel: "Analyze Hypertension",
            onClick: () => alert("Analyzing Hypertension Symptoms"),
        },
        {
            title: "Asthma",
            description: "A chronic respiratory condition that causes inflammation and narrowing of the airways, leading to wheezing and difficulty breathing.",
            imageUrl: "https://www.who.int/images/default-source/departments/ncds/chronic-respiratory-diseases/asthma-feature-story-boy.jpg?sfvrsn=4d9f2bee_20",
            buttonLabel: "Analyze Asthma",
            onClick: () => alert("Analyzing Hypertension Symptoms"),
        },
        {
            title: "Chronic Obstructive Pulmonary Disease (COPD)",
            description: "A group of lung diseases that block airflow and make breathing difficult, often due to smoking.",
            imageUrl: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2018/2/shutterstock_COPD_treatment.jpg",
            buttonLabel: "Analyze (COPD)",
            onClick: () => alert("Analyzing Hypertension Symptoms"),
        },
        {
            title: "Heart Disease",
            description: "Encompasses conditions like coronary artery disease and heart failure, characterized by chest pain, shortness of breath, and fatigue.",
            imageUrl: "https://bpincontrol.in/wp-content/uploads/2023/08/Heart-Disease.jpg",
            buttonLabel: "Analyze Heart Disease",
            onClick: () => alert("Analyzing Hypertension Symptoms"),
        },
        {
            title: "Osteoarthritis",
            description: "A degenerative joint disease causing pain, swelling, and stiffness as cartilage wears down over time.",
            imageUrl: "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41584-018-0095-4/MediaObjects/41584_2018_95_Fig1_HTML.png",
            buttonLabel: "Analyze Osteoarthritis",
            onClick: () => alert("Analyzing Hypertension Symptoms"),
        },
        {
            title: "Gastroesophageal Reflux Disease (GERD)",
            description: "A digestive disorder where stomach acid frequently flows back into the esophagus, causing discomfort and heartburn.",
            imageUrl: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2017/10/12/13/48/r7_heartburn-8col.jpg",
            buttonLabel: "Analyze Gastroesophageal RD",
            onClick: () => alert("Analyzing Hypertension Symptoms"),
        },
        {
            title: "Allergies",
            description: "Immune system reactions to substances like pollen or certain foods, ranging from mild symptoms to severe reactions.",
            imageUrl: "https://domf5oio6qrcr.cloudfront.net/medialibrary/7253/manage-allergies.jpg",
            buttonLabel: "Analyze Allergies",
            onClick: () => alert("Analyzing Hypertension Symptoms"),
        }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-8">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    buttonLabel={card.buttonLabel}
                    onClick={card.onClick}
                />
            ))}
        </div>
    );
};


function TenProprietaryModels() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Investment News</h1>
            <CardGrid/>
        </div>
    );
}

export default TenProprietaryModels;
