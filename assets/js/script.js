const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const tarefa = document.getElementsByClassName('tarefa_text')



addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText != '') {
        const taskItem = criarLi(taskText)
        taskList.appendChild(taskItem);
        taskInput.value = '';
        
        const deleteButton = taskItem.querySelector('.deleteTask');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
            TDelete('Tarefa Deletada')
        });

        const inputButton = taskItem.querySelector('.sucessTask');
        inputButton.addEventListener('click', () => {
            taskList.appendChild(taskItem);
            TRealizada('Tarefa Realizada')
        });

    }
    else {
        erroMensagem('Insira a Tarefa!')
    }


    function criarLi(taskText){
        const taskItem = document.createElement('li')
        taskItem.classList.add('tarefa_text')
        taskItem.innerHTML = `
        ${taskText}
        <div class="data">${relogio()}</div>
        <div class="btn"><button class="deleteTask"><ion-icon name="trash-outline"></ion-icon></button></div>
        <div class="inputConcluido"><input type='radio' class="sucessTask"></input></div>`
        
        Tincluida('Tarefa Incluida')

        return taskItem;
    }



    function relogio() {
        const dataAtual = new Date();
        const ano = dataAtual.getFullYear();
        const mes = dataAtual.getMonth() + 1;
        const dia = dataAtual.getDate();
        const horas = dataAtual.getHours();
        const minutos = dataAtual.getMinutes();
        return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
    }

    function erroMensagem(mensagem) {
        const Toast1 = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast1.fire({
            icon: 'error',
            title: mensagem,
        })

    }


    function Tincluida(Tincluida){
        const Toast1 = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast1.fire({
            icon: 'success',
            title: Tincluida,
        })
    }
    


    function TDelete(TDelete){
        const Toast1 = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast1.fire({
            icon: 'error',
            title: TDelete,
        })

    }
    function TRealizada(TRealizada){
        const Toast1 = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast1.fire({
            icon: 'success',
            title: TRealizada,
        })

    }
});
