import React from 'react';
import { useTranslation } from 'react-i18next';

interface Step {
    index: number;
    label: string;
}

interface StepperProps {
    currentStep: number;
    steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center mb-4">
            {steps.map((step) => (
                <React.Fragment key={step.index}>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${currentStep === step.index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                        {step.label}
                    </div>
                    {step.index < steps.length && <div className="w-10 h-1 bg-gray-200 mx-4 mt-4"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Stepper;