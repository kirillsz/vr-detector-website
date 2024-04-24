export default function handleInputValidate(value) {
  return /.+@.+\.[A-Za-z]+$/.test(value);
}
