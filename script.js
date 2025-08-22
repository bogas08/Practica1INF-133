 const url = "https://dummyjson.com/recipes";
const esIndex = document.getElementById("resultado") !== null;
const esInstrucciones = document.getElementById("instrucciones") !== null;
    if (esIndex){
        fetch(url)
      .then(res => res.json())
      .then(data => {
        const recetas = data.recipes;
        let html = "";

        recetas.slice(0, 15).forEach(receta => {
          html += `
            <div class="card">
              <img src="${receta.image}" alt="${receta.name}">
              <h2>${receta.name}</h2>
              <p> <strong>ID:</strong> ${receta.id}</p>
              <p> <strong>Cocina:</strong> ${receta.cuisine}</p>
              <p> <strong>Tiempo:</strong> ${receta.cookTimeMinutes} min</p>
            </div>
          `;
        });

        document.getElementById("resultado").innerHTML = html;
      })
      .catch(error => {
        document.getElementById("resultado").innerHTML = "Error al cargar recetas.";
        console.error(error);
      });
      document.getElementById("Boton").addEventListener("click", function() {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            const recetas = data.recipes;
            let html = "";

            recetas.slice(15, 30).forEach(receta => {
              html += `
                <div class="card">
                  <img src="${receta.image}" alt="${receta.name}">
                  <h2>${receta.name}</h2>
                  <p><strong>ID:</strong> ${receta.id}</p>
                  <p><strong>Cocina:</strong> ${receta.cuisine}</p>
                  <p><strong>Tiempo:</strong> ${receta.cookTimeMinutes} min</p>
                </div>
              `;
            });

            document.getElementById("resultado").innerHTML += html;
          })
          .catch(error => {
            document.getElementById("resultado").innerHTML = "Error al cargar más recetas.";
            console.error(error);
          });
      });
        document.getElementById("Boton2").addEventListener("click", function() {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const recetas = data.recipes;
                let html = "";
    
                recetas.slice(0, 15).forEach(receta => {
                html += `
                    <div class="card">
                    <img src="${receta.image}" alt="${receta.name}">
                    <h2>${receta.name}</h2>
                    <p><strong>ID:</strong> ${receta.id}</p>
                    <p><strong>Cocina:</strong> ${receta.cuisine}</p>
                    <p><strong>Tiempo:</strong> ${receta.cookTimeMinutes} min</p>
                    </div>
                `;
                });
    
                document.getElementById("resultado").innerHTML = html;
            })
            .catch(error => {
                document.getElementById("resultado").innerHTML = "Error al cargar recetas.";
                console.error(error);
            });

        });
        document.getElementById("Boton3").addEventListener("click", function() {
        window.location.href = "instrucciones.html";
    });
}
        if (esInstrucciones) {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const recetas = data.recipes;
                let html = "";
    
                recetas.slice(0, 15).forEach(receta => {
                html += `
                    <div class="card" id="instrucciones" >
                    <img src="${receta.image}" alt="${receta.name}">
                    <h2>${receta.name}</h2>
                    <p><strong>ID:</strong> ${receta.id}</p>
                    <p><strong>INSTRUCCIONES:</strong> ${receta.instructions}</p>
                    <p><strong>DIFICULTAD:</strong> ${receta.difficulty} min</p>
                    </div>
                `;
                });
    
                document.getElementById("instrucciones").innerHTML = html;
            })
            .catch(error => {
                document.getElementById("instrucciones").innerHTML = "Error al cargar recetas.";
                console.error(error);
            });
            document.getElementById("Boton").addEventListener("click", function() {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            const recetas = data.recipes;
            let html = "";

            recetas.slice(15, 30).forEach(receta => {
              html += `
                <div class="card">
                  <img src="${receta.image}" alt="${receta.name}">
                  <h2>${receta.name}</h2>
                  <p><strong>ID:</strong> ${receta.id}</p>
                  <p><strong>INSTRUCCIONES:</strong> ${receta.instructions}</p>
                  <p><strong>DIFICULTAD:</strong> ${receta.difficulty} min</p>
                </div>
              `;
            });

            document.getElementById("instrucciones").innerHTML += html;
          })
          .catch(error => {
            document.getElementById("instrucciones").innerHTML = "Error al cargar más recetas.";
            console.error(error);
          });
      });
      document.getElementById("Boton2").addEventListener("click", function() {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const recetas = data.recipes;
                let html = "";
    
                recetas.slice(0, 15).forEach(receta => {
                html += `
                    <div class="card">
                    <img src="${receta.image}" alt="${receta.name}">
                    <h2>${receta.name}</h2>
                    <p><strong>ID:</strong> ${receta.id}</p>
                    <p><strong>INSTRUCCIONES:</strong> ${receta.instructions}</p>
                    <p><strong>DIFICULTAD:</strong> ${receta.difficulty} min</p>
                    </div>
                `;
                });
    
                document.getElementById("instrucciones").innerHTML = html;
            })
            .catch(error => {
                document.getElementById("instrucciones").innerHTML = "Error al cargar recetas.";
                console.error(error);
            });

        });
        
       }