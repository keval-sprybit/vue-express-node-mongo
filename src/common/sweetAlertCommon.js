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

// async confirmDelete(title: string, text: string)
export function confirmDelete(title, text) {
  
      if(title == '')
      {
          title = 'Are you sure?';
      }
      if(text == '')
      {
          text = "You won't be able to revert this!";
      }

    const promiseData= Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
          if (result.value)
          {
            return true;
          }
          else 
          {
            return false;
          }
      })
      // return promiseData;
      return promiseData;
  }

export default swalInstance;
