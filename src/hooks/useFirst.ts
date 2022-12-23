import { useUpdateEffect } from "ahooks";
import { useState } from "react";

const useFirst = (flag: boolean) => {
  const [first, setFirst] = useState(false);

  useUpdateEffect(() => {
    setFirst(true);
  }, [flag]);

  return first;
};

export default useFirst;
