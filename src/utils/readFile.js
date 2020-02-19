export default function(file) {
  return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();

        reader.onload = res => {
            resolve(res);
        }
        reader.readAsArrayBuffer(file);
      } catch (err) {
          reject(err);
      }
  });
}
