/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
export const getErrorResponse = (error: any): string => {
  let errorMessage: string = error.message;
  if (error.response) {
    if (error.response.data) {
      if (error.response.data.message) errorMessage = error.response.data.message;
    }
  }
  return errorMessage;
};
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const getErrorResponse2 = (error: any) => {};
