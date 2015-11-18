
(function() { // On utilise une IIFE pour ne pas polluer l'espace global
   // var storage = {};; // Contient l'objet de la div en cours de déplacement

    function init() { // La fonction d'initialisation
        var elements = document.querySelectorAll('.draggableBox'),
            elementsLength = elements.length;

        for (var i = 0 ; i < elementsLength ; i++) {
            	elements[i].addEventListener('mousedown', function(e) { // Initialise le drag & drop
                storage.target = e.target;
                storage.offsetX = e.clientX - storage.target.offsetLeft;
                storage.offsetY = e.clientY - storage.target.offsetTop;
            }, false);

            elements[i].addEventListener('mouseup', function() { // Termine le drag & drop
                storage = {};
            }, false);
        }

        document.addEventListener('mousemove', function(e) { // Permet le suivi du drag & drop
            var target = storage.target;
            if (target) {
                target.style.top = e.clientY - storage.offsetY + 'px';
                target.style.left = e.clientX - storage.offsetX + 'px';
            }
        }, false);
    }

    init(); // On initialise le code avec notre fonction toute prête.
})();
