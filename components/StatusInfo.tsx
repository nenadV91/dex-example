import { useMemo } from "react";
import { CHAINS, SupportedChainId } from "chains";

type StatusInfoProps = {
  isActive: boolean;
  isActivating: boolean;
  error: Error | undefined;
};

export default function StatusInfo({
  isActive,
  isActivating,
  error,
}: StatusInfoProps) {
  const status = useMemo(() => {
    if (isActivating) {
      return "Connecting";
    } else if (isActive) {
      return "Connected";
    } else if (error) {
      return "Error connecting";
    } else {
      return "Not connected";
    }
  }, [error, isActivating, isActive]);

  return (
    <div>
      <span>Status: </span>
      <span>{status}</span>
    </div>
  );
}
