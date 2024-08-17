const url = 'https://zkvunrdlabwgatycfxpi.supabase.co/rest/v1/comentarios';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprdnVucmRsYWJ3Z2F0eWNmeHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NzQwNjAsImV4cCI6MjAzOTM1MDA2MH0.-rZqybzrYlavNIekjba8lPuo-5yfhChcW4I421S6VEc';

document.getElementById('formulario').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    try{
        await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': key
            },
            body: JSON.stringify({ nome, comentario })
        });

        document.getElementById('formulario').reset();

        buscarComentarios();
    } catch (error){
        console.log(error);
    }
});

async function buscarComentarios(){
    try{
        const response = await fetch(url,{
            headers: {
                'apikey': key
            }
        });

        const comentarios = await response.json();
        const listaComentarios = document.getElementById('lista-comentarios');

        comentarios.sort((a, b) => b.id - a.id);

        listaComentarios.innerHTML = '';

        comentarios.forEach(comentario =>{
            const item = document.createElement('div');
            item.className = 'item-comentario';
            item.innerHTML = `<strong>${comentario.nome}</strong>:<p>${comentario.comentario}</p>
            `;
            listaComentarios.appendChild(item);
        });
    }catch(error){
        console.log(error);
    }
}

buscarComentarios();