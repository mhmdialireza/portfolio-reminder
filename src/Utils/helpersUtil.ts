export const getApiErrorMessage = (error: unknown) => {
  const err = error as any;

  return err.response.data.error as string;
};
