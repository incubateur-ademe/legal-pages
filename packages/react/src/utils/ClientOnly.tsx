"use client";

import { type SuspenseProps, useEffect, useState } from "react";

export const ClientOnly = ({ children, fallback }: SuspenseProps) => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
};

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
