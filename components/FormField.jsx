import React from "react";

const FormField = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label className="block mb-2 font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="text-[#37BCBA] w-full px-3 py-2 mb-3 border rounded-md"
      />
    </div>
  );
};

export default FormField;
