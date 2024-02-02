<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('create').onclick = function(){
      document.querySelector('.box').style.display = 'block';
    }
    document.getElementById('cancel').onclick = function (){
      document.querySelector('.box').style.display = 'none';
    }
    

  });
  document.addEventListener('DOMContentLoaded', function (){
   
  document.querySelector('#submit').disabled = true;
  document.querySelector('#task').onkeyup = function(){
    if (document.querySelector('#task').value.length > 0){
       document.querySelector('#submit').disabled = false;
    }
    else {
      document.querySelector('#submit').disabled = true;
    }
  }


      document.querySelector('form').onsubmit = function (){
       const task = document.getElementById('task').value;
       const time = document.getElementById('time').value;
       const date = document.getElementById('date').value;

       const li = document.createElement('li');
       
       li.innerHTML = `<strong>${task}</strong> - Time: ${time} - Date: ${date}`;
        

       document.querySelector('#tasks').append(li);
       document.querySelector('#task').value = '';
       document.getElementById('time').value = '';
       document.getElementById('date').value = ''; 


          
       document.getElementById('delete').style.display = 'block';

       document.getElementById('delete').onclick = function(){
        document.getElementById('tasks').style.display = 'none';
        document.getElementById('delete').style.display = 'none';
        document.getElementById('tasks').value = '';
       };
       

       return false;
       
      }
    });
  </script>
