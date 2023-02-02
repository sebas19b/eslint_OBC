/* Crea un nuevo proyecto de Node
 - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
 - Duplica el archivo del ejercicio de la sesión 04-Textos
 - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
 - Crea el fichero .eslintrc.json
 - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
 - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
 - Crea un script en el package.json para corregir automáticamente todos los errores
 - Ejecuta el script a través del terminal
 
 Codigo inicial
const name = 'sebastian';
const lastname = `barreto`;
const student = `${name} ${lastname}`;
const student_uppercase = student.toUpperCase();
const student_lowercase = student.toLowerCase();
const text_length = student.length;
const first_letter = name.charAt(0);
const last_letter = lastname.charAt(lastname.length-1);
const delete_space = student.replace(" ", "");
const name_ckeck = student.includes(`${name}`)
console.log(name_ckeck);


*/
//- Una cadena de texto con tu Nombre
const name = "sebastian"
//- Otra cadena de texto con tu Apellido
//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const lastname = "barreto"
const student = `${name} ${lastname}`
//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const student_uppercase = student.toUpperCase()
//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const student_lowercase = student.toLowerCase()
//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const text_length = student.length
//- Una variable que contenga la primera letra del Nombre
const first_letter = name.charAt(0)
//- Otra variable que contenga la última letra del Apellido
const last_letter = lastname.charAt(lastname.length-1)
//- Una cadena de texto que elimine los espacios de la variable "estudiante"
const delete_space = student.replace(" ", "")
//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const name_ckeck = student.includes(`${name}`)
console.log(name_ckeck)