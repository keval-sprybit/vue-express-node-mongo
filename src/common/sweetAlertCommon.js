import Swal from 'sweetalert2';

const swalInstance = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

export function showSweetAlert(alertType, message) {
  const swalConfig = {
    icon: alertType,
    title: message,
    // text: message,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swalInstance.stopTimer);
      toast.addEventListener('mouseleave', swalInstance.resumeTimer);
    }
  };

  return swalInstance.fire(swalConfig);
}

export default swalInstance;
