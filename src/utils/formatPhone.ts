// create a mask to phone number and residence number
// export function maskPhone(value: string) {
//   return value
//     .replace(/\D/g, '')
//     .replace(/(\d{2})(\d)/, '($1) $2')
//     .replace(/(\d{4})(\d)/, '$1-$2')
//     .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
//     .replace(/(-\d{4})\d+?$/, '$1')
// }

export function maskPhone(value: string) {
 if (!value) {
  // return ''
  return null
 }

 const is0800 = value.startsWith('0800')

 if (is0800) {
  let formattedValue = value.replace(/\D/g, '')

  if (formattedValue.length === 11) {
   return formattedValue.replace(/^0800(\d{3})(\d{4})$/, '0800 $1-$2')
  } else if (formattedValue.length === 10) {
   return formattedValue.replace(/^0800(\d{3})(\d{3})$/, '0800 $1-$2')
  } else {
   return value // return unmodified value if it doesn't match the expected length
   //  return formattedValue.replace(/^0800(\d{4})(\d{4})$/, '0800 $1-$2')
  }
 }

 return value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\d{4})(\d)/, '$1-$2')
  .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
  .replace(/(-\d{4})\d+?$/, '$1')
}
