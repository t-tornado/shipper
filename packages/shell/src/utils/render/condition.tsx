import React from "react";

interface ConditionProps {
  condition: boolean;
  children: React.ReactNode | React.ReactNode[];
}
export const Condition = ({ children, condition }: ConditionProps) => {
  if (!condition) return null;
  return <>{children}</>;
};
