$(document).ready(function() {
  var project_id = 10000160; // default
  if (location.hash) {
     if (location.hash === '#file') {
       if (sessionStorage.getItem('filename')) {
         // signal to Scratch to load the file contents from localStorage
         project_id = 'file';
         } else {
            // no file stored, reset to default
            location.hash = '';
        }
        } else if (!Number.isNaN(Number(location.hash.substr(1)))) {
            project_id = parseInt(location.hash.substr(1), 10);
       }
     }
  var scratch = new Scratch(project_id);
});
