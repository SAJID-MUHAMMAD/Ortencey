import React from "react";

import { Progress, Typography } from "@material-tailwind/react";
const Choose = () => {
  return (
    <div className="py-10">
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between gap-4">
          <Typography color="blue-gray" variant="h6">
            Completed
          </Typography>
          <Typography color="blue-gray" variant="h6">
            50%
          </Typography>
        </div>
        <Progress
          className="text-red-900"
          value={50}
          color="red"
          size="sm"
          variant="gradient"
        />
      </div>
    </div>
  );
};

export default Choose;
