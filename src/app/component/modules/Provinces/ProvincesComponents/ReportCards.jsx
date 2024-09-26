import {
    BackwardIcon,
    BanknotesIcon,
    FlagIcon,
} from "@heroicons/react/24/outline";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function ReportCards({
  regionName,
  province,
  totalCases,
  recoveries,
  deaths,
}) {
  return (
    <Card className="w-full shadow-lg drop-shadow-lg">
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-semibold flex items-center gap-2"
          >
            <FlagIcon className="w-4 h-4" /> Region Name
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {regionName} {province ? `- ${province}` : ""}
          </Typography>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-semibold flex items-center gap-2"
          >
            <BanknotesIcon className="w-4 h-4" />
            Total Cases
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {totalCases}
          </Typography>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-semibold flex items-center gap-2"
          >
            <BackwardIcon className="w-4 h-4" /> Recoveries
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {recoveries}
          </Typography>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-semibold flex items-center gap-2"
          >
            😵 Deaths
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {deaths}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
