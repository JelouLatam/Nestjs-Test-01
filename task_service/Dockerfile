# Usa la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --legacy-peer-deps

# Copia todo el código fuente al contenedor
COPY . .

# Ejecuta ESLint para analizar el código y corregir errores que pueda automáticamente
RUN npm run lint --fix

# Ejecuta Prettier para formatear el código
RUN npm run format

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación en modo producción
CMD ["npm", "run", "start:prod"]