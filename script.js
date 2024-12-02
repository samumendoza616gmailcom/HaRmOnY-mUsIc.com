document.querySelectorAll('.menu > li').forEach(function(menuItem) {
  let submenu;
  let timer;

  // Evento al entrar al elemento del menú
  menuItem.addEventListener('mouseenter', function () {
      submenu = this.querySelector('.menu-vertical');
      if (submenu) {
          clearTimeout(timer); // Cancela cualquier temporizador activo
          submenu.style.display = 'block'; // Muestra el submenú
      }
  });

  // Evento al salir del elemento del menú
  menuItem.addEventListener('mouseleave', function () {
      if (submenu) {
          // Inicia un temporizador para ocultar el submenú después de un breve tiempo
          timer = setTimeout(function () {
              submenu.style.display = 'none';
          }, 100); // 300 ms, ajusta el tiempo según sea necesario
      }
  });

  // Evento al entrar al submenú, cancela el temporizador
  if (submenu) {
      submenu.addEventListener('mouseenter', function () {
          clearTimeout(timer);
      });

      // Evento al salir del submenú, inicia el temporizador nuevamente
      submenu.addEventListener('mouseleave', function () {
          timer = setTimeout(function () {
              submenu.style.display = 'none';
          }, 700); // 300 ms
      });
  }
});





const nodemailer = require('nodemailer');

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'tucorreo@gmail.com',
    pass: 'tupassword'
  }
});

// Configura el correo electrónico a enviar
const mailOptions = {
  from: 'tucorreo@gmail.com',
  to: 'correo_del_usuario@gmail.com',
  subject: 'Pago recibido',
  text: `Gracias por tu pago de ${monto} dólares. Número de transacción: ${numeroTransaccion}. Fecha y hora del pago: ${fechaHoraPago}.`
};

// Envía el correo electrónico
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(info);
  }
}); 



