document.addEventListener('DOMContentLoaded', function () {

    const VisibleCircle = document.getElementById('btnCircle');
    const CircleCard = document.getElementById('cardCircle');

    const VisibleRec = document.getElementById('btnRec');
    const RecCard = document.getElementById('cardRectangle');

    const VisibleSquad = document.getElementById('btnSquare');
    const SquadCard = document.getElementById('cardSquare');

    const VisibleTri = document.getElementById('btnTri')
    const TrianCard = document.getElementById('cardTri');

    VisibleCircle.addEventListener('click', function() {

        RecCard.classList.remove('visible');
        RecCard.classList.add('hidden');

        TrianCard.classList.remove('visible');
        TrianCard.classList.add('hidden');

        SquadCard.classList.remove('visible');
        SquadCard.classList.add('hidden');

        CircleCard.classList.remove('hidden');
        CircleCard.classList.add('visible');
    });

    VisibleRec.addEventListener('click', function() {

        TrianCard.classList.remove('visible');
        TrianCard.classList.add('hidden');

        SquadCard.classList.remove('visible');
        SquadCard.classList.add('hidden');

        CircleCard.classList.remove('visible');
        CircleCard.classList.add('hidden');

        RecCard.classList.remove('hidden');
        RecCard.classList.add('visible');
    });

    VisibleSquad.addEventListener('click', function() {

        TrianCard.classList.remove('visible');
        TrianCard.classList.add('hidden');

        CircleCard.classList.remove('visible');
        CircleCard.classList.add('hidden');

        RecCard.classList.remove('visible');
        RecCard.classList.add('hidden');

        SquadCard.classList.remove('hidden');
        SquadCard.classList.add('visible');
    });
    
    VisibleTri.addEventListener('click', function() {

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
        CirculoArea = Math.PI * (Math.pow(radioCircle.value, 2));
        spanCircleArea.innerHTML = `${CirculoArea.toFixed(5)}`;
        CirculoPerimetro = 2 * Math.PI * radioCircle.value;
        spanCirclePerimetro.innerHTML = `${CirculoPerimetro.toFixed(5)}`;
    });

    const calcularRec = document.getElementById('btnCalcRec');
    const spanRecPerimetro = document.getElementById('RecBlankPerimetro');
    const spanRecArea = document.getElementById('RecBlankArea');

    let RecArea;
    let RecPerimetro;

    calcularRec.addEventListener('click', function () {
        const baseRec = parseFloat(document.getElementById('inpBaseRec').value);
        const alturaRec = parseFloat(document.getElementById('inpAlturaRec').value);

        RecPerimetro = (baseRec * 2) + (alturaRec * 2);
        spanRecPerimetro.innerHTML = `${RecPerimetro.toFixed(5)}`;

        RecArea = baseRec * alturaRec;
        spanRecArea.innerHTML = `${RecArea.toFixed(5)}`;
    });

    const calcularCuad = document.getElementById('btnCalcCuad');
    const ladoCuad = document.getElementById('inpLadoCuad');
    const spanCuadArea = document.getElementById('CuadBlankArea');
    const spanCuadPerimetro = document.getElementById('CuadBlankPerimetro');
    let CuadArea;
    let CuadPerimetro;

    calcularCuad.addEventListener('click', function () {
        CuadPerimetro = parseFloat(ladoCuad.value) * 4;
        spanCuadPerimetro.innerHTML = `${CuadPerimetro.toFixed(5)}`;

        CuadArea = Math.pow(ladoCuad.value, 2);
        spanCuadArea.innerHTML = `${CuadArea.toFixed(5)}`;
    });

    const calcularTrian = document.getElementById('btnCalcTrian');
    const ladoA = document.getElementById('inpLadoA');
    const ladoB = document.getElementById('inpLadoB');
    const ladoC = document.getElementById('inpLadoC');
    const spanTrianPerimetro = document.getElementById('TrianBlankPerimetro');
    const spanTrianArea = document.getElementById('TrianBlankArea');
    let TrianPerimetro;
    let TrianArea;
    let semiperimetro;

    calcularTrian.addEventListener('click', function () {

        const ladoANum = parseFloat(ladoA.value);
        const ladoBNum = parseFloat(ladoB.value);
        const ladoCNum = parseFloat(ladoC.value);

        TrianPerimetro = ladoANum + ladoBNum + ladoCNum;
        spanTrianPerimetro.innerHTML = `${TrianPerimetro.toFixed(5)}`;

        semiperimetro = (ladoANum + ladoBNum + ladoCNum) / 2;
        TrianArea = Math.sqrt(semiperimetro * (semiperimetro - ladoANum) * (semiperimetro - ladoBNum) * (semiperimetro - ladoCNum))
        spanTrianArea.innerHTML = `${TrianArea.toFixed(5)}`;

    });

});