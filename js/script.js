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
                'Authorization': `Bearer ${key}`,
                'apikey': key
            },
            body: JSON.stringify({ nome, comentario })
        });

        document.getElementById('formulario').reset();
    } catch (error){
        console.log(error);
    }
        
});