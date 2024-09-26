import { Input, Typography } from "@material-tailwind/react";

const MoreFiltersForm = ({ filters, setFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="mb-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4">
      <div className="flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Choose Date
        </Typography>
        <Input
          type="date"
          name="date"
          onChange={handleChange}
          color="red"
          size="lg"
          label="Query"
        />
      </div>
      <div className="flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Search Query
        </Typography>
        <Input
          color="red"
          name="q"
          type="text"
          onChange={handleChange}
          size="lg"
          label="Query"
          placeholder="search by region or province names"
        />
      </div>
      <div className="flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          ISO
        </Typography>
        <Input
          type="text"
          name="iso"
          color="red"
          onChange={handleChange}
          size="lg"
          placeholder="Search by ISO"
          label="ISO"
        />
      </div>
      <div className="flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Region Name
        </Typography>
        <Input
          type="text"
          name="region_name"
          onChange={handleChange}
          color="red"
          size="lg"
          placeholder="Search by Region Name"
          label="Region Name"
        />
      </div>
    </div>
  );
};

export default MoreFiltersForm;
