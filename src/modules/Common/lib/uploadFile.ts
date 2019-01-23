export const uploadFile = (file: File, onSuccess: (data: string) => void) => {
  const reader = new FileReader();
  reader.onload = (e: any) => {
    try {
      onSuccess(e.target.result);
    } catch (ex) {
      alert("Problem with loading file");
    }
  };
  reader.readAsText(file);
};
