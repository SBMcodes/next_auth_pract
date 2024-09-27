import React from "react";
// import Header from "./Header";
// import BackButton from "./BackButton";
// import { Card, CardHeader, CardFooter } from "../ui/card";
import CardWrapper from "./CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops Something went wrong!"
      backButtonLabel="Back to Login!"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon
          className="text-destructive"
          width={48}
          height={48}
        />
      </div>
    </CardWrapper>
    // <Card className="w-[400px] shadow-md">
    //   <CardHeader>
    //     <Header label="Oops Something went wrong!" />
    //   </CardHeader>
    //   <CardFooter>
    //     <BackButton label="Back to Login!" href="/auth/login" />
    //   </CardFooter>
    // </Card>
  );
};

export default ErrorCard;
