import React, { useState } from 'react';
import { useFormik } from 'formik';
import profile from "../assets/profile-picture.png";

interface Doctor {
 
    specialization: string;
    department: string;
    experience: string;
    location: string;
}

const DoctorForm: React.FC = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null);

    const initialValues: Doctor = {
  
        specialization: '',
        department: '',
        experience: '',
        location: ''
    };

    const validate = (values: Doctor) => {
        const errors: Partial<Doctor> = {};

        if (!values.specialization) {
            errors.specialization = 'Required';
        }

        if (!values.department) {
            errors.department = 'Required';
        }

        if (!values.experience) {
            errors.experience = 'Required';
        }

        if (!values.location) {
            errors.location = 'Required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='h-screen w-full flex justify-center items-center'>
        <form onSubmit={formik.handleSubmit} className="w-full max-w-lg p-4 mx-auto">
            <div className='flex justify-center mb-4'>
                <span className="relative">
                    <img
                        src={profileImage|| profile || ''}
                        alt="Profile"
                        className="w-28 h-28 inline-block rounded-full border overflow-hidden mb-2"
                    />
                      <label htmlFor="profilePicture" className="absolute bottom-0 right-0 cursor-pointer px-2 py-2 bg-slate-50 hover:bg-slate-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-opacity-20">
                <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                </svg>

                </label>
                </span>
                </div>
        
            <div className="mb-4">
                <input
                    id="profilePicture"
                    name="profilePicture"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                />
              
            </div>
            {/* <div className="mb-4">
                <label htmlFor="name" className="block mb-1">
                    Name:
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                />
                {formik.errors.name && <div className="text-red-500 block text-center mt-1 mx-4 text-[10px]">{formik.errors.name}</div>}
            </div> */}
            <div className="mb-4">
                <label htmlFor="specialization" className="block mb-1">
                Specialization:
                </label>
                <input
                    id="specialization"
                    name="specialization"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.specialization}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                />
                {formik.errors.specialization && <div className="text-red-500 block text-center mt-1 mx-4 text-[12px]">{formik.errors.specialization}</div>}
            </div>
            <div className="mb-4">
                <label htmlFor="department" className="block mb-1">
                    Department:
                </label>
                <input
                    id="department"
                    name="department"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.department}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                />
                {formik.errors.department && <div className="text-red-500 block text-center mt-1 mx-4 text-[12px]">{formik.errors.department}</div>}
            </div>
            <div className="mb-4">
                <label htmlFor="experience" className="block mb-1">
                    Experience:
                </label>
                <input
                    id="experience"
                    name="experience"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.experience}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                />
                {formik.errors.experience && <div className="text-red-500 block text-center mt-1 mx-4 text-[12px]">{formik.errors.experience}</div>}
            </div>
            <div className="mb-4">
                <label htmlFor="location" className="block mb-1">
                    Location:
                </label>
                <input
                    id="location"
                    name="location"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                />
                {formik.errors.location && <div className="text-red-500 block text-center mt-1 mx-4 text-[12px]">{formik.errors.location}</div>}
            </div>
            <div className='flex items-center justify-center'>
            <button type="submit" className="bg-secondary w-full text-white px-4 py-2 rounded-lg hover:bg-secondary-dark">Submit</button>
            </div>
        </form>
        </div>
    );
};

export default DoctorForm;
