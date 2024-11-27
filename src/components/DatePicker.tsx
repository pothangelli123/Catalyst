import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  selected: Date;
  onChange: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selected, onChange }) => {
  return (
    <div className="relative">
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="MMMM d, yyyy"
        minDate={new Date()}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10"
      />
      <Calendar className="absolute left-3 top-[50%] transform -translate-y-[50%] text-gray-400" size={20} />
    </div>
  );
};

export default DatePicker;