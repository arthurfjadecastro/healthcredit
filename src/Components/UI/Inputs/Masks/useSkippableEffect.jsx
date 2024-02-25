import { useState, useMemo, useEffect } from "react";

const useSkippableEffect = (
  effect,
  dependencies,
  ignoredValues = [null],
  times = 1
) => {
  const [prevDependencies, setPrevDependencies] = useState(dependencies);
  const mergedDependencies = useMemo(
    () =>
      dependencies.map((dep, index) =>
        ignoredValues.includes(dep) ? prevDependencies[index] : dep
      ),
    [...dependencies, ...ignoredValues]
  );

  useEffect(() => {
    setPrevDependencies(mergedDependencies);
  }, [mergedDependencies]);
};

export default useSkippableEffect;
