# React JS

React bukanlah framework melainkan library javascript yang digunakan untuk membangun user interfaces

## Keunggulan React

### Declarative

Rancangan tampilan yang sederhana untuk setiap keadaan.
React akan memperbarui dan merender komponen yang tepat secara efisien ketika ada perubahan data.
Tampilan yang deklaratif membuat kode yang kamu buat dapat lebih mudah diprediksi dan didebug.

### Comonent-Based

Kamu dapat membuat komponen-komponen yang mengelola state mereka sendiri, kemudian kamu dapat menusunnya menjadi tampilan yang komplex.

### Learn Once, Write Anywhere

Kamu bisa membuat fitur baru tanpa menulis ulang kode yang sudah ada.
React juga dapat dirender di server menggunakan node dan mendukung mobile app menggunakan React Native.

## React Notes

### Simple Component

Kompoen-komponen react mengimplementasikan / menggunakan metode render() untuk mengambil inputan data dan mengembalikan apa yang akan ditampilkan. Inputan data yang dikirimkan ke komponen dapat diakses oleh method render() melalui props, contohnya this.props.namaProps.

### Statefull Component

Selain menggunakan props untuk mengambil inputan data, komponen dapat mengelola data internal nya sendiri menggunakan state. State dapat diakses dengan cara this.state.namaState.
Ketika state data pada sebuah komponen berubah, markup yang sudah dirender akan memangil kembali method render().

### An Application

Dengan menggunakan props dan state, kita dapat menggunakan keduanya untuk membuat sebuah aplikasi.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
