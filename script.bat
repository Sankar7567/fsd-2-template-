@echo off
title MERN Lab Complete Setup
color 0A

echo ==============================================
echo        MERN STACK LAB AUTOMATIC SETUP
echo ==============================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed.
    echo Install Node.js first from https://nodejs.org
    pause
    exit
)

echo Node.js Found.
node -v
npm -v
echo.

:: Create Project Folder
set PROJECT=MERN-Lab

if not exist "%PROJECT%" (
    mkdir "%PROJECT%"
)

cd "%PROJECT%"

echo ==============================================
echo Creating Backend...
echo ==============================================

if not exist backend mkdir backend

cd backend

call npm init -y

echo.
echo Installing Backend Dependencies...
echo.

call npm install ^
express ^
mongoose ^
cors ^
dotenv ^
cookie-parser ^
express-session ^
bcrypt ^
bcryptjs ^
jsonwebtoken ^
passport ^
passport-local ^
body-parser ^
method-override ^
multer ^
ejs ^
express-validator ^
helmet ^
compression ^
morgan ^
connect-mongo ^
express-flash ^
nodemailer ^
uuid ^
validator ^
moment ^
socket.io ^
axios

echo.
echo Installing Backend Dev Dependencies...
echo.

call npm install -D ^
nodemon ^
concurrently

cd ..

echo ==============================================
echo Creating React Frontend...
echo ==============================================

call npm create vite@latest frontend -- --template react

cd frontend

call npm install

echo.
echo Installing React Packages...
echo.

call npm install ^
axios ^
react-router-dom ^
sass ^
bootstrap ^
react-bootstrap ^
react-icons ^
formik ^
yup ^
redux ^
react-redux ^
@reduxjs/toolkit ^
framer-motion ^
react-toastify ^
sweetalert2 ^
jwt-decode ^
classnames

echo.
echo ==============================================
echo Creating Common Folder Structure...
echo ==============================================

cd ..

mkdir backend\models
mkdir backend\routes
mkdir backend\controllers
mkdir backend\middlewares
mkdir backend\config
mkdir backend\utils
mkdir backend\uploads
mkdir backend\public

mkdir frontend\src\components
mkdir frontend\src\pages
mkdir frontend\src\hooks
mkdir frontend\src\services
mkdir frontend\src\context
mkdir frontend\src\assets
mkdir frontend\src\styles
mkdir frontend\src\utils

echo PORT=5000>backend\.env
echo MONGO_URI=mongodb://localhost:27017/mernlab>>backend\.env
echo JWT_SECRET=your_secret_key_here>>backend\.env

echo.
echo ==============================================
echo INSTALLATION FINISHED SUCCESSFULLY
echo ==============================================
echo.
echo Project Structure:
echo.
echo MERN-Lab
echo    backend
echo    frontend
echo.
echo Backend Packages Installed:
echo.
echo Express
echo Mongoose
echo MongoDB
echo Sessions
echo Cookies
echo JWT
echo Passport
echo Authentication
echo Middleware
echo Multer
echo EJS
echo CORS
echo Morgan
echo Helmet
echo Compression
echo Nodemailer
echo Validator
echo Socket.io
echo Axios
echo.
echo Frontend Packages Installed:
echo.
echo React
echo React Router
echo Axios
echo Bootstrap
echo React Bootstrap
echo React Icons
echo Redux Toolkit
echo React Redux
echo Formik
echo Yup
echo Sass
echo Framer Motion
echo Toastify
echo SweetAlert2
echo JWT Decode
echo.
echo ==============================================
echo Ready for all ExpressJS, ReactJS and MongoDB
echo Lab Experiments.
echo ==============================================
pause
