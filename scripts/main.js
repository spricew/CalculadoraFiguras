document.addEventListener('DOMContentLoaded', function () {

    const VisibleCircle = document.getElementById('btnCircle');
    const CircleCard = document.getElementById('cardCircle');

    const VisibleRec = document.getElementById('btnRec');
    const RecCard = document.getElementById('cardRectangle');

    const VisibleSquad = document.getElementById('btnSquare');
    const SquadCard = document.getElementById('cardSquare');

    const VisibleTri = document.getElementById('btnTri')
    const TrianCard = document.getElementById('cardTri');

    VisibleCircle.addEventListener('click', function () {

        RecCard.classList.remove('visible');
        RecCard.classList.add('hidden');

        TrianCard.classList.remove('visible');
        TrianCard.classList.add('hidden');

        SquadCard.classList.remove('visible');
        SquadCard.classList.add('hidden');

        CircleCard.classList.remove('hidden');
        CircleCard.classList.add('visible');
    });

    VisibleRec.addEventListener('click', function () {

        TrianCard.classList.remove('visible');
        TrianCard.classList.add('hidden');

        SquadCard.classList.remove('visible');
        SquadCard.classList.add('hidden');

        CircleCard.classList.remove('visible');
        CircleCard.classList.add('hidden');

        RecCard.classList.remove('hidden');
        RecCard.classList.add('visible');
    });

    VisibleSquad.addEventListener('click', function () {

        TrianCard.classList.remove('visible');
        TrianCard.classList.add('hidden');

        CircleCard.classList.remove('visible');
        CircleCard.classList.add('hidden');

        RecCard.classList.remove('visible');
        RecCard.classList.add('hidden');

        SquadCard.classList.remove('hidden');
        SquadCard.classList.add('visible');
    });

    VisibleTri.addEventListener('click', function () {

        CircleCard.classList.remove('visible');
        CircleCard.classList.add('hidden');

        RecCard.classList.remove('visible');
        RecCard.classList.add('hidden');

        SquadCard.classList.remove('visible');
        SquadCard.classList.add('hidden');

        TrianCard.classList.remove('hidden');
        TrianCard.classList.add('visible');
    });

    //////////////////////////////////////////////////////////////

    const radioCircle = document.getElementById('inpRadioCircle');
    const calcularCircle = document.getElementById('btnCalcCircle');
    const spanCircleArea = document.getElementById('CircleBlankArea');
    const spanCirclePerimetro = document.getElementById('CircleBlankPerimetro');
    let CirculoArea; // PI * RADIO AL CUADRADO
    let CirculoPerimetro; // 2 * PI * RADIO

    calcularCircle.addEventListener('click', function () {
        const radio = parseFloat(radioCircle.value);

        if (radio <= 0 || isNaN(radio)) {
            radioCircle.value = '';
            alert('El radio debe ser mayor a 0');
        } else {

            const CirculoArea = Math.PI * Math.pow(radio, 2);
            spanCircleArea.innerHTML = `${CirculoArea.toFixed(5)}`;

            const CirculoPerimetro = 2 * Math.PI * radio;
            spanCirclePerimetro.innerHTML = `${CirculoPerimetro.toFixed(5)}`;
        }
    });

    const calcularRec = document.getElementById('btnCalcRec');
    const spanRecPerimetro = document.getElementById('RecBlankPerimetro');
    const spanRecArea = document.getElementById('RecBlankArea');

    let RecArea;
    let RecPerimetro;

    calcularRec.addEventListener('click', function () {
        const baseRecInput = document.getElementById('inpBaseRec');
        const alturaRecInput = document.getElementById('inpAlturaRec');
        const baseRec = parseFloat(baseRecInput.value);
        const alturaRec = parseFloat(alturaRecInput.value);

        if (baseRec <= 0 || isNaN(baseRec)) {
            alert('La base debe ser mayor a 0');
            alturaRecInput.value = '';
            baseRecInput.value = '';
        } else if (alturaRec <= 0 || isNaN(alturaRec)) {
            alert('La altura debe ser mayor a 0');
            baseRecInput.value = '';
            alturaRecInput.value = '';
        } else if (baseRec === alturaRec) {
            alert('La base y la altura no pueden tener la misma medida');
            baseRecInput.value = '';
            alturaRecInput.value = '';
        } else {
            RecPerimetro = (baseRec * 2) + (alturaRec * 2);
            spanRecPerimetro.innerHTML = `${RecPerimetro.toFixed(5)}`;

            RecArea = baseRec * alturaRec;
            spanRecArea.innerHTML = `${RecArea.toFixed(5)}`;
        }
    });


    const calcularCuad = document.getElementById('btnCalcCuad');
    const ladoCuad = document.getElementById('inpLadoCuad');
    const spanCuadArea = document.getElementById('CuadBlankArea');
    const spanCuadPerimetro = document.getElementById('CuadBlankPerimetro');
    let CuadArea;
    let CuadPerimetro;

    calcularCuad.addEventListener('click', function () {
        const lado = parseFloat(ladoCuad.value); 
    
        if (lado <= 0 || isNaN(lado)) {
            alert('El lado debe ser mayor a 0');
            ladoCuad.value = '';
        } else {
            CuadPerimetro = lado * 4;
            spanCuadPerimetro.innerHTML = `${CuadPerimetro.toFixed(5)}`;
    
            CuadArea = Math.pow(lado, 2);
            spanCuadArea.innerHTML = `${CuadArea.toFixed(5)}`;
        }
    });
    

    const calcularTrian = document.getElementById('btnCalcTrian');
    const ladoAInput = document.getElementById('inpLadoA');
    const ladoBInput = document.getElementById('inpLadoB');
    const ladoCInput = document.getElementById('inpLadoC');
    const spanTrianPerimetro = document.getElementById('TrianBlankPerimetro');
    const spanTrianArea = document.getElementById('TrianBlankArea');

    calcularTrian.addEventListener('click', function () {
        const ladoA = parseFloat(ladoAInput.value);
        const ladoB = parseFloat(ladoBInput.value);
        const ladoC = parseFloat(ladoCInput.value);

        if (ladoA <= 0 || isNaN(ladoA) || ladoB <= 0 || isNaN(ladoB) || ladoC <= 0 || isNaN(ladoC)) {
            alert('Todos los lados deben ser números mayores a 0');
            if (ladoA <= 0 || isNaN(ladoA)) ladoAInput.value = ''; 
            if (ladoB <= 0 || isNaN(ladoB)) ladoBInput.value = ''; 
            if (ladoC <= 0 || isNaN(ladoC)) ladoCInput.value = ''; 
        } else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
            alert('Las medidas proporcionadas no forman un triángulo');
            ladoAInput.value = ''; 
            ladoBInput.value = ''; 
            ladoCInput.value = ''; 
        } else {
           
            const TrianPerimetro = ladoA + ladoB + ladoC;
            spanTrianPerimetro.innerHTML = `${TrianPerimetro.toFixed(5)}`;

            const s = TrianPerimetro / 2;
            const TrianArea = Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC));
            spanTrianArea.innerHTML = `${TrianArea.toFixed(5)}`;
        }
    });

});