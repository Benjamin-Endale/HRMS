import React, { useState } from 'react';
import { Dropdown } from '../../../Components/DropDown';
import NumberInput from '../../../Components/NumberInput';

export default function AddReview({ onClose }) {
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedJob, setSelectedJob] = useState('');

  // Categories
  const categories = ["Technical Skill", "Communication", "Leadership", "Innovation", "Teamwork"];
  const [ratings, setRatings] = useState(Array(categories.length).fill(0));

  // Update a specific category rating
  const handleRatingChange = (index, newValue) => {
    const updated = [...ratings];
    updated[index] = newValue;
    setRatings(updated);
  };

  // Calculate average rating
  const averageRating = ratings.length > 0
    ? (ratings.reduce((sum, val) => sum + val, 0) / ratings.length).toFixed(1)
    : 0;

  return (
    <div className='px-[3rem] py-[2.875rem] space-y-[3.125rem] font-semibold'>
      {/* Header */}
      <div className='flex justify-between'>
        <div>
          <h1 className='textFormColor'>Performance Review</h1>
          <h4 className='text-limegray'>Conduct a comprehensive performance evaluation</h4>
        </div>
        <button onClick={onClose} className='rounded-full center-center cursor-pointer'>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M25.5 13C25.5 19.9035 19.9035 25.5 13 25.5C6.09644 25.5 0.5 19.9035 0.5 13C0.5 6.09644 6.09644 0.5 13 0.5C19.9035 0.5 25.5 6.09644 25.5 13ZM9.21204 9.21206C9.57815 8.84595 10.1717 8.84595 10.5379 9.21206L13 11.6741L15.462 9.21209C15.8281 8.84597 16.4218 8.84597 16.7879 9.21209C17.154 9.5782 17.154 10.1718 16.7879 10.5379L14.3258 13L16.7879 15.462C17.154 15.8281 17.154 16.4218 16.7879 16.7879C16.4218 17.154 15.8281 17.154 15.462 16.7879L13 14.3259L10.5379 16.7879C10.1718 17.154 9.57818 17.154 9.21206 16.7879C8.84595 16.4218 8.84595 15.8281 9.21206 15.4621L11.6741 13L9.21204 10.5379C8.84591 10.1718 8.84591 9.57818 9.21204 9.21206Z" fill="#BEE532"/>
          </svg>
        </button>
      </div>

      {/* Form */}
      <form className='flex flex-col gap-[4.75rem]'>
        {/* Dropdowns */}
        <div className='flex justify-between w-full gap-[1.125rem]'>

          <div className='flex-1'>
            <Dropdown
              label="Review Type"
              options={['Engineering', 'Marketing', 'Finance']}
              selected={selectedJob}
              onSelect={setSelectedJob}
              placeholder="Select Review"
            />
          </div>
        </div>

        {/* Category Ratings */}
        <div className='flex flex-col gap-[2.375rem]'>
          {categories.map((category, idx) => (
            <div key={idx} className='flex flex-col gap-[1rem]'>
              <div className='between'>
                <label className='text-formColor'>{category}</label>
                <div className='flex gap-[0.8125rem] items-center'>
                  <span className='text-limegray'>{ratings[idx].toFixed(1)}/5.0</span>
                  <NumberInput
                    min={0}
                    max={5}
                    step={0.1}
                    defaultValue={ratings[idx]}
                    onChange={(val) => handleRatingChange(idx, val)}
                  />
                </div>
              </div>
              <textarea
                placeholder={`Feedback for ${category}`}
                className='text-formColor bg-inputBack rounded-[10px] placeholder-input pt-[0.59375rem] pl-[1.1875rem] resize-none h-[4.75rem]'
              />
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="flex flex-col gap-[1rem]">
          <div className="between">
            <label className="text-formColor">Overall Feedback</label>
            <div className="flex gap-[0.8125rem] items-center">
              <span className="text-limegray">{averageRating}/5.0</span>
            </div>
          </div>
          <textarea
            placeholder="Feedback for overall performance"
            className="text-formColor bg-inputBack rounded-[10px] placeholder-input pt-[0.59375rem] pl-[1.1875rem] resize-none h-[4.75rem]"
          />
        </div>

        {/* Submit Button */}
        <div className='w-full h-[3.4375rem] mt-[0.5rem]'>
          <button
            type="submit"
            className='w-full h-full bg-lemongreen rounded-[10px] cursor-pointer'
          >
            Complete Review 
          </button>
        </div>
      </form>
    </div>
  );
}
