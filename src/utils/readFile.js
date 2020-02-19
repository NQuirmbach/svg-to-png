export default function(file) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();

      reader.onload = e => resolve(e.target.result);
      reader.readAsDataURL(file);
    } catch (err) {
      reject(err);
    }
  });
}
