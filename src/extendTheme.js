import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #9dadbc;
}

.container {
  background-color: #EEE;
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  box-shadow: 3px 3px 5px #3A4856;
  padding: 30px;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background: #008ECC;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 2px 2px 4px #CCC;
  display: flex;
  border-radius: 4px;
}

.task.reminder {
  border-left: 10px solid #C16997;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

.delete-button-wrapper{
  display: flex;
  margin-left: auto;;
}

.delete-button {
  color: red;
  cursor: pointer;
  align-self: center;
}

footer {
  margin-top: 30px;
  text-align: center;
}

})

export default customTheme