// =============================================
// SISTEMA DE BASE DE DATOS SIMULADO - MEJORADO
// =============================================

// Datos REALES de rutas de transporte de Ibagué - EXPANDIDO CON NUEVAS RUTAS
const rutasIbagué = [
    {
        id: 1,
        nombre: "LÍNEA 1 - DELICIAS",
        descripcion: "Ruta Delicias - Centro - Belén",
        paradas: [
            "Cra. 7 X Cll. 5", "Cra. 7 X Cll. 5", "Cll. 6 X Cra. 7", "Cra. 7 X Cll. 8", 
            "Cll. 10 X Cra 5a", "Cra. 4 X Cll. 13", "Cra. 4 X Cll. 14", "Cra. 4 X Cll. 16", 
            "Cra. 4 X Cll. 18", "Carrera 4 191", "Plaza De La 21 (Cra. 4 X Cll. 20)", 
            "Plaza 21", "Cra. 4 X Cll. 23", "Cra. 4 X Cll. 27", "Cra. 4 X Cll. 29", 
            "Carrera 4 30-61", "Estadio", "Carrera 4 382", "Cra. 4 X Cll. 40", 
            "Universidad Del Tolima", "Cll. 42 X Cra. 4d",
            "Cra. 4 X Cll. 44", "Cra. 4 X Cll. 46", "Barrio La Francia", "Cra. 4 X Cll. 50",
            "Cra. 4 X Cll. 52", "Colegio San Simón", "Cra. 4 X Cll. 56", "Barrio Obrero",
            "Cra. 4 X Cll. 60", "Mercado La 60", "Cra. 4 X Cll. 62", "Barrio Picaleña",
            "Cra. 4 X Cll. 64", "Parque Picaleña", "Cra. 4 X Cll. 66", "Escuela Picaleña",
            "Cra. 4 X Cll. 68", "Barrio El Salado", "Cra. 4 X Cll. 70", "Iglesia El Salado",
            "Cra. 4 X Cll. 72", "Terminal Delicias", "Cra. 4 X Cll. 74", "Mercado Delicias",
            "Cra. 4 X Cll. 76", "Barrio Delicias", "Cra. 4 X Cll. 78", "Colegio Delicias",
            "Cra. 4 X Cll. 80", "Final Delicias"
        ],
        tipo: "principal",
        frecuencia: "15-20 min",
        horario: "Lunes a Sábado: 12:02-21:30 | Domingo: 05:30-20:50",
        color: "#FF0000",
        direccion: "Delicias",
        duracion: "37 min",
        paradasCount: 51,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "12 min",
            busesActivos: 3,
            estado: "Normal"
        },
        coordenadas: [
            [4.444, -75.244], [4.445, -75.243], [4.446, -75.242], [4.447, -75.241],
            [4.448, -75.240], [4.449, -75.239], [4.450, -75.238], [4.451, -75.237],
            [4.452, -75.236], [4.453, -75.235], [4.454, -75.234], [4.455, -75.233],
            [4.456, -75.232], [4.457, -75.231], [4.458, -75.230], [4.459, -75.229],
            [4.460, -75.228], [4.461, -75.227], [4.462, -75.226], [4.463, -75.225],
            [4.464, -75.224], [4.465, -75.223], [4.466, -75.222], [4.467, -75.221],
            [4.468, -75.220], [4.469, -75.219], [4.470, -75.218], [4.471, -75.217],
            [4.472, -75.216], [4.473, -75.215]
        ]
    },
    {
        id: 2,
        nombre: "LÍNEA 1 - BELÉN",
        descripcion: "Ruta Belén - Centro - Delicias",
        paradas: [
            "Av. Ferrocarril X Cll. 42", "Sena", "Sena", "Cra. 5 X Cll. 44", 
            "Cra. 5 X Cll. 50", "Paralela Jordan", "Cra. 3 X Cll. 59", "Panamericana", 
            "Cra. 8 X Cll. 60", "Cra. 8 X Cll. 64", "Cll. 64 X Cra. 9", "Cra. 10d", 
            "Cra. 10c X Cll. 67", "Cll. 69 X Cra. 10", "Usi", "Cll. 74 X Cra. 8a", 
            "Cll. 77 X Cra. 8", "Cll. 77 X Cra. 9", "Cll. 77 X Cra. 10", 
            "Entre Ríos (Av. Ambalá X Cll. 77)", "Av. Ambalá X Cll. 75", 
            "Av. Ambalá X Cll. 68", "Avenida Ambala - Montemadero", 
            "Universidad De Ibagué (Av. Ambalá X Cll. 66a)", "Unibague", 
            "Cll. 67 X Cra. 23", "Cll. 67 X Cra. 28", "Cll. 73 X Cra. 33", 
            "Cll. 73 X Cra. 36", "Terminal Barrio Delicias",
            "Terminal Barrio Delicias", "Cll. 73 X Cra. 36", "Cll. 73 X Cra. 33", 
            "Los Ciruelos (Cll. 68 X Cra. 21f)", "Cll. 67 X Cra. 28", 
            "Cll. 67 X Cra. 23", "Ibagué 2000 (Cll. 64 X Cra. 23)", 
            "Barrio Ambalá (Cll. 64 X Cra. 15)", "Av. Ambalá X Cll. 63", 
            "San Antonio (Av. Ambalá X Cll. 61c)", "Cc La Estación (Av. Ambalá X Cll. 60)", 
            "Cc La Estación (Av. Ambalá X Cll. 60)", 
            "Urb. Portal De Medina (Av. Ambalá X Cll. 67)", 
            "Barrio Ambalá (Av. Ambalá X Cll. 66)", 
            "Comfatolima (Av. Ambalá X Cll. 69)", "Av. Ambala X Calle 69", 
            "Carrera 12 69-232", "Av. Ambalá X Cll. 68", "Av. Ambalá X Cll. 76", 
            "Call. 77 X Cra. 11", "Jordán 7ma Etapa (Cll. 77 X Cra. 11a)", 
            "Call. 77 X Cra. 10", "Avenida Guabinal, 751", 
            "Jordán 7ma Etapa (Av. Guabinal X Cll. 74a)", "Usi", 
            "Colegio Niño Jesús De Praga", "Cra. 10c X Cll. 67", 
            "Carrera 11 C, 67", "Calle 64", "Cra. 8 X Cll. 64", 
            "San Jacinto (Cll. 64 X Cra. 7)", "Centro Comercial Multicentro", 
            "Multicentro (Cra. 5 X Cll. 61a)", 
            "Hospital Federico Lleras Acosta Sede Limonar", "Cra. 5 X Call. 47", 
            "Piedrapintada (Cra. 5 X Cll. 44)", "Cll. 42 X Cra. 4d", 
            "Cra. 4 X Cll. 42", "Carrera 4 39b2", "Cra. 4 X Cll 40", 
            "Carrera 4 39-29", "Carrera 4 39-29", "Estadio", "Carrera 4 35-53", 
            "Hospital Federico Lleras", "Carrera 4a 34a2", "Cra. 4a X Cll. 34", 
            "Carrera 4a 30-40", "Carrera 4a 311", "Cra. 4a X Cll. 31", 
            "Carrera 4a 291", "Carrera 4a 28a1", "Carrera 4a 27a39 Pp", 
            "Ferrocarril Pp", "Hipódromo (Av. Ferrocarril X Cll. 26)", 
            "Av. Ferrocarril X Cra. 4", "Br. Estación (Av. Ferrocarril X Cll. 24)", 
            "Av Ferrocaril Crr 2", "Comando Policía Ibagué", 
            "Br. Estación (Av. Ferrocarril X Cll. 21)", 
            "Br. Estación (Av. Ferrocarril X Cll. 21)", 
            "Br. Estación (Av. Ferrocarril X Cll. 21)", "Calle 19a 1a2", 
            "Cll. 19 X Cra. 1", "Cra. 1 X Cll. 18", "Centro (Cll. 18 X Cra. 1)", 
            "Carrera 1 171 Pp", "Carrera 1 161 Pp", "Cra. 1 X Cll. 16", 
            "Carrera 1 151", "Calle 15 12 Pp", "Cll. 15 X Cra. 2 - 3", 
            "Cll. 15 X Cra 3 - 4", "Cll. 15 X Cra. 4 - 5", "Cll. 15 X Cra. 6", 
            "Interlaken (Cll. 15 X Cra. 7)", "Sexta Brigada (Cra. 8 X Cll. 12)", 
            "Museo Panóptico (Cra. 8 X Cll. 10)", "Belén (Cra. 10 X Cll. 6)", 
            "Cra. 8 X Cll. 3", "Cra. 7 X Cll. 5"
        ],
        tipo: "principal",
        frecuencia: "15-20 min",
        horario: "Lunes a Domingo: 05:00-21:30",
        color: "#0000FF",
        direccion: "Belén",
        duracion: "42 min",
        paradasCount: 81,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "8 min",
            busesActivos: 4,
            estado: "Normal"
        },
        coordenadas: [
            [4.434, -75.254], [4.435, -75.253], [4.436, -75.252], [4.437, -75.251],
            [4.438, -75.250], [4.439, -75.249], [4.440, -75.248], [4.441, -75.247],
            [4.442, -75.246], [4.443, -75.245], [4.444, -75.244], [4.445, -75.243],
            [4.446, -75.242], [4.447, -75.241], [4.448, -75.240], [4.449, -75.239],
            [4.450, -75.238], [4.451, -75.237], [4.452, -75.236], [4.453, -75.235],
            [4.454, -75.234], [4.455, -75.233], [4.456, -75.232], [4.457, -75.231],
            [4.458, -75.230], [4.459, -75.229], [4.460, -75.228], [4.461, -75.227],
            [4.462, -75.226], [4.463, -75.225], [4.464, -75.224], [4.465, -75.223],
            [4.466, -75.222], [4.467, -75.221], [4.468, -75.220], [4.469, -75.219],
            [4.470, -75.218], [4.471, -75.217], [4.472, -75.216], [4.473, -75.215]
        ]
    },
    {
        id: 3,
        nombre: "LÍNEA 2 - CAÑAVERAL",
        descripcion: "Ruta Centro - Cañaveral",
        paradas: [
            "Clarita Botero", "Calle 17a, 17-05", "Calle 16, 1508", "Carrera 14", 
            "Calle 15, 1304", "Calle 13, 1336", "Calle 13, 10-94", "Carrera 10, 1209", 
            "Cra. 7a X Cll. 10", "Cll. 10 X Cra 5a", "Carrera 5, 965", "Centro (Cra. 5 X Cll. 12)", 
            "Cra. 5 X Cll. 16", "Cra. 5 X Cll. 20", "Plaza 21", "Cra. 5 X Cll. 22", 
            "Cra. 5 X Cll. 23", "Centro Comercial La 5", "Liceo Nacional", "Cra. 5 X Cll. 34", 
            "Cra. 5 X Cll. 35 / Cádiz", "Cra. 5 X Cll. 39 / Colpatria", "Los Olivos", 
            "Cra. 5 X Cll. 42", "Cra. 5 X Cll. 42 / Unidad Deportiva La 42", 
            "Coliseo Enrique Triana Castilla", "Glorieta Monumento A La Paz", "Sena", 
            "Versalles", "Cra. 5 X Cll. 47", "Cra. 5 X Cll. 50", "Carrera 5, 51115", 
            "Paralela Jordan", "Calle 59, 4a81", "Cra. 3 X Cll. 59", "Calle 60, 2-75", 
            "Panamericana", "Cra. 8 X Cll. 60", "Cra. 9 X Cll. 64", "Cll. 67 X Cra. 8", 
            "Cra. 8 X. Calle 69.", "Carrera 8, 71c47", "Carrera 8, #75-15", "Carrera 8, 7715", 
            "Cll. 77 X Cra. 8", "Cll. 77 X Cra. 9", "Avenida Guabinal, 751", 
            "Jordán 7ma Etapa (Cll. 77 X Cra. 11a)", "Calle 77, 11b38", 
            "Entre Ríos (Cll. 77 X Cra. 12)", "Entre Ríos (Av. Ambalá X Cll. 77)", 
            "Av. Ambalá X Cll. 80- Cr14", "Pedregal X Cll 83 - Cr 14", "Carrera 17 851 Pp", 
            "Arroyuelos", "Br. Cañaveral", "Br. Cañaveral", "Cañaveral", "Terminal Cañaveral Parte Alta"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Domingo: 05:20-20:48",
        color: "#00FF00",
        direccion: "Cañaveral",
        duracion: "81 min",
        paradasCount: 59,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "15 min",
            busesActivos: 2,
            estado: "Normal"
        },
        coordenadas: [
            [4.430, -75.260], [4.431, -75.259], [4.432, -75.258], [4.433, -75.257],
            [4.434, -75.256], [4.435, -75.255], [4.436, -75.254], [4.437, -75.253],
            [4.438, -75.252], [4.439, -75.251], [4.440, -75.250], [4.441, -75.249],
            [4.442, -75.248], [4.443, -75.247], [4.444, -75.246], [4.445, -75.245],
            [4.446, -75.244], [4.447, -75.243], [4.448, -75.242], [4.449, -75.241],
            [4.450, -75.240], [4.451, -75.239], [4.452, -75.238], [4.453, -75.237],
            [4.454, -75.236], [4.455, -75.235], [4.456, -75.234], [4.457, -75.233],
            [4.458, -75.232], [4.459, -75.231], [4.460, -75.230], [4.461, -75.229],
            [4.462, -75.228], [4.463, -75.227], [4.464, -75.226], [4.465, -75.225],
            [4.466, -75.224], [4.467, -75.223], [4.468, -75.222], [4.469, -75.221],
            [4.470, -75.220], [4.471, -75.219], [4.472, -75.218], [4.473, -75.217],
            [4.474, -75.216], [4.475, -75.215], [4.476, -75.214], [4.477, -75.213],
            [4.478, -75.212], [4.479, -75.211], [4.480, -75.210], [4.481, -75.209],
            [4.482, -75.208], [4.483, -75.207], [4.484, -75.206], [4.485, -75.205],
            [4.486, -75.204], [4.487, -75.203], [4.488, -75.202], [4.489, -75.201]
        ]
    },
    {
        id: 4,
        nombre: "LÍNEA 2 - CLARITA BOTERO",
        descripcion: "Ruta Cañaveral - Clarita Botero",
        paradas: [
            "Terminal Cañaveral Parte Alta", "Cañaveral", "Br. Cañaveral", "Br. Cañaveral", 
            "Av Ambalá Pp", "Calleja Del Vergel", "Av. Ambalá X Cll. 80", "Call. 77 X Cra. 11", 
            "Call. 77 X Cra. 10", "Usi", "Colegio Niño Jesús De Praga", "Cll. 64 X Cra. 9", 
            "Cra. 8 X Cll. 64", "Centro Comercial Multicentro", "Multicentro (Cra. 5 X Cll. 61a)", 
            "Hospital Federico Lleras Acosta Sede Limonar", "Cra. 5 X Call. 47", 
            "Piedrapintada (Cra. 5 X Cll. 44)", "Centro Médico Javeriano", "Cra. 5 X Cll. 43", 
            "Icbf / Unidad Deportiva La 42", "Nueva Eps", "Movistar", "Yamaha", 
            "Colegio De San Simon", "Cra. 5 X Cll. 34", "Carrera 5a, 3233", "Cra. 5 X Cll. 30", 
            "Edi cio M-30", "Cra. 5 X Cll. 26", "Sitsa", "El Carmen (Cra. 5 X Cll. 23)", 
            "Cra. 5 X Cll. 22", "Plaza De La 21 (Cra. 5 X Cll. 21)", "Colegio Boyacá (Cra. 5 X Cll. 20)", 
            "El Carmen (Cra. 5 X Cll. 15)", "Centro (Cra. 5 X Cll. 14)", "Cun", "Cra. 6 X Cll. 11", 
            "Skate Plaza", "Sexta Brigada (Cra. 8 X Cll. 12)", "Urbanización Himalaya", 
            "20 De Julio", "Ancon", "Clarita Botero"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Domingo: 05:20-20:48",
        color: "#FF00FF",
        direccion: "Clarita Botero",
        duracion: "31 min",
        paradasCount: 45,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "18 min",
            busesActivos: 3,
            estado: "Normal"
        },
        coordenadas: [
            [4.489, -75.201], [4.488, -75.202], [4.487, -75.203], [4.486, -75.204],
            [4.485, -75.205], [4.484, -75.206], [4.483, -75.207], [4.482, -75.208],
            [4.481, -75.209], [4.480, -75.210], [4.479, -75.211], [4.478, -75.212],
            [4.477, -75.213], [4.476, -75.214], [4.475, -75.215], [4.474, -75.216],
            [4.473, -75.217], [4.472, -75.218], [4.471, -75.219], [4.470, -75.220],
            [4.469, -75.221], [4.468, -75.222], [4.467, -75.223], [4.466, -75.224],
            [4.465, -75.225], [4.464, -75.226], [4.463, -75.227], [4.462, -75.228],
            [4.461, -75.229], [4.460, -75.230], [4.459, -75.231], [4.458, -75.232],
            [4.457, -75.233], [4.456, -75.234], [4.455, -75.235], [4.454, -75.236],
            [4.453, -75.237], [4.452, -75.238], [4.451, -75.239], [4.450, -75.240],
            [4.449, -75.241], [4.448, -75.242], [4.447, -75.243], [4.446, -75.244],
            [4.445, -75.245], [4.444, -75.246]
        ]
    },
    {
        id: 5,
        nombre: "LÍNEA 4 - ARBOLEDA CAMPESTRE",
        descripcion: "Ruta Boquerón - Arboleda Campestre",
        paradas: [
            "Terminal Boqueron", "Multifamiliares El Tejar (Cll. 19 X Cra. 38 Sur)", 
            "Boquerón (Av. Ricaurte X Cra. 38 Sur)", "Boquerón (Av. Ricaurte X Cra. 36a Sur)", 
            "Variante Ib-Ar Pp", "Terminal Barrio Jazmín", "Cll. 18 X Cll. 19", 
            "Cll. 18 X Cra. 28 Sur", "Cll. 18 X Cra. 27 Sur", "Cll. 18 X Cra. 25 Sur", 
            "Cra. 25 X Av. Ricaurte", "Br. Miramar (Cra. 29 X Cll. 20)", 
            "Universidad Del Tolima Sede Miramar (Av. Ricaurte X Cra 20 Sur)", 
            "Cll. 20 X Cra. 20 Sur", "Calle 20, 2108", 
            "Batallón Jaime Rooke (Av. Ricaurte X Cra. 16 Sur)", 
            "Conjunto Residencial Lotus (Av. Ricaurte X Cra. 14 Sur)", 
            "Br. Ricaurte (Av. Ricaurte X Calle 21)", "Calle 20 Pp", "Mercacentro #8", 
            "Avenida Ricaurte X Cra. 11 Sur", "Ricaurte (Cra. 11 Sur X Cll. 20a)", 
            "Ie José Antonio Ricaurte (Cra. 11 Sur X Cll. 21)", 
            "Jardín Infantil Colmenitas (Cll. 23 X Cra. 11 Sur)", 
            "Carrera 7a Sur, 23-67", "Kennedy (Cll. 24 X Cll. 10 Sur)", 
            "Cra. 8 Sur X Cll. 24", "Cra. 8 Sur X Cll. 23", 
            "Casa Cultural Del Sur (Cra. 8a Sur X Cll. 21)", "Galán (Cra. 8a Sur X Cll. 19)", 
            "Calle 19, #16-10", "Cra. 7s X Cll. 17b", "Carrera 7 Sur, 2-90", 
            "Carrera 7 Sur, 2-90", "Cra. 6s X Cra. 9s", "Carrera 4 Sur 14a2 Pp", 
            "Carrera 4 Sur 1364 Pp", "Carrera 4 Sur Pp", "Cra. 2 Sur", "Carrera 2 Sur Pp", 
            "Carrera 1a Sur Pp", "Carrera 1a Sur 122 Pp", "Calle 12 Pp", "Cra 2 Sur", 
            "Carrera 2 Sur 10a-1 Pp", "Carrera 1 Bis Sur 7a92 Pp", "Carrera 1 Bis Sur 61", 
            "Carrera 1a Sur 5-75 Pp", "Cra. 1a X Cll. 5", "El Libertador (Cra. 1 X Cll. 5)", 
            "El Libertador (Cra. 1 Sur X Cll. 5)", "El Libertador (Cra. 1 Sur X Cll. 5)", 
            "Conservatorio Del Tolima (Cra. 1 Sur X Cll. 9)", "Carrera 1 Sur 71-48b Pp", 
            "Universidad Cooperativa", "Cra. 2 X Cll. 10", "Carrera 2 1158 Pp", 
            "Calle 12, 2-3", "Carrera 2 13-56 Pp", "Carrera 2, 13-80", "Carrera 2 152 Pp", 
            "Cll. 15 X Cra. 2 - 3", "Cll. 15 X Cra 3 - 4", "Cra. 4 X Cll. 16", 
            "Cra. 4 X Cll. 18", "Carrera 4 191", "Plaza De La 21 (Cra. 4 X Cll. 20)", 
            "Plaza 21", "Carrera 4 22-73", "Cra. 4 X Cll. 23", "Br. Estación (Cra. 4 X Cll. 24)", 
            "Av. Ferrocarril X Cra. 4", "Cra. 4 X Cll. 27", "Cra. 4 X Cll. 29", 
            "Carrera 4 30-61", "Cra. 4 X Cll. 34", "Cra. 4 X Cll. 35", "Estadio", 
            "Los Mártires (Cra. 4 X Cll. 37)", "Carrera 4 382", "Cra. 4 X Cll. 40", 
            "Universidad Del Tolima", "Cra. 4 X Cll. 42a", "Sena", "Av. Mirolindo X Cll. 45", 
            "Fiscalía General De La Nación", "Av. Mirolindo X Cll 58", 
            "Av. Mirolindo X Cll. 60", "La Tienda Del Cafe", 
            "Dispapeles (Av. Mirolindo X Cll. 69)", "Carnaval Del Pollo", "Av Mirolindo Pp", 
            "Glorieta Mirolindo Lado Sur", "Serviarros", "Cocacola", 
            "Bodegas Nemesio Arango (Cra. 12 Sur X Av. Pedro Tafur)", 
            "Medicádiz (Cra. 12 Sur X Cll. 93)", "Aeropuerto Perales", 
            "Comité De Cafeteros Del Tolima (Cll. 145 X Cra. 12 Sur)", 
            "Las Américas (Cll. 145 X Cra. 16 Sur)", "Glorieta Picaleña", 
            "Glorieta Variante", "Ingreso Arboleda Campestre", 
            "Ie José Joaquín Florez (Cra. 21 Sur X Cll. 152)", 
            "Conjunto Cámbulo (Cra. 21 Sur X Cll. 154)", 
            "Conjunto Iguá (Cra. 21 Sur X Cll. 156)", "Calle 92, 2-35", "Arboleda Campestre"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Domingo: 05:00-21:00",
        color: "#FFA500",
        direccion: "Arboleda Campestre",
        duracion: "71 min",
        paradasCount: 108,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "10 min",
            busesActivos: 4,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(108, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 6,
        nombre: "LÍNEA 4 - BOQUERÓN",
        descripcion: "Ruta Arboleda Campestre - Boquerón",
        paradas: [
            "Arboleda Campestre", "Cra. 21 Sur X Cll. 160", 
            "Cámbulo Arboleda Campestre (Cra. 21 Sur X Cll. 154)", 
            "Ie José Joaquín Florez Arboleda", "Yarumo Arboleda Campestre", 
            "Carrera 21 Sur", "Glorieta Picaleña", "Picaleña (Cll. 145 X Cra. 18k Sur)", 
            "Madeira Campestre (Cll. 145 X Cra. 16 Sur)", 
            "Estación De Carabineros (Cll. 145 X Cra. 15f Sur)", 
            "Glorieta Aeropuerto Perales (Cra. 12 Sur X Cll. 145)", 
            "Avícola Triple A (Cra. 12 Sur X Cll. 93)", "La Samaria (Cra. 12 Sur X Cll. 93)", 
            "Parque Deportivo (Cra. 12 Sur X Av. Pedro Tafur)", "Industrias Aliadas", 
            "Mirolindo", "Via Bogota", "Av. Mirolindo", "Honda", "Av Mirolindo Pp", 
            "Cll. 60 X Av. Mirolindo", "Av. Mirolindo X Cll. 44", "Almacafé", "Enertolima", 
            "Colsanitas Mirolindo", "Sena", "Carrera 4 42a1", "Carrera 4 42a1", 
            "Iglesia San Judas Tadeo", "Carrera 4 39b2", "Cra. 4 X Cll 40", 
            "Carrera 4 39-29", "Carrera 4 39-29", "Estadio", "Carrera 4 35-53", 
            "Hospital Federico Lleras", "Carrera 4a 34a2", "Cra. 4a X Cll. 34", 
            "Carrera 4a 30-40", "Carrera 4a 311", "Cra. 4a X Cll. 31", "Carrera 4a 291", 
            "Carrera 4a 28a1", "Carrera 4a 27a39 Pp", "Ferrocarril Pp", 
            "Hipódromo (Av. Ferrocarril X Cll. 26)", "Av. Ferrocarril X Cra. 4", 
            "Br. Estación (Av. Ferrocarril X Cll. 24)", "Av Ferrocaril Crr 2", 
            "Comando Policía Ibagué", "Br. Estación (Av. Ferrocarril X Cll. 21)", 
            "Br. Estación (Av. Ferrocarril X Cll. 21)", 
            "Br. Estación (Av. Ferrocarril X Cll. 21)", "Calle 19a 1a2", 
            "Cll. 19 X Cra. 1", "Cra. 1 X Cll. 18", "Centro (Cll. 18 X Cra. 1)", 
            "Carrera 1 171 Pp", "Carrera 1 161 Pp", "Cra. 1 X Cll. 16", "Cra. 1 X Cll. 16", 
            "Carrera 1 151", "Cra. 1 X Cll. 15", "Terminal Calle 13", "Cra. 1 X Cll. 12", 
            "Carrera 1, 12-1", "Calle 12, 2-3", "Cra. 1 X Cll. 12", "Carrera 2 13-56 Pp", 
            "Carrera 2, 13-80", "Carrera 2 152 Pp", "Carrera 2, 1542", "Cra. 2 X Cll. 16", 
            "Iglesia San Roque (Cra. 2 X Cll. 17)", "Parque Andrés López De Galarza (Cra. 2 X Cll. 18)", 
            "Carrera 2 18 Pp", "Cra. 2 X Cll. 18", "Carrera 2 18 Pp", "Monumento A La Bandera", 
            "Cll. 19 X Cra. 1", "Cra. 1 Sur", "Matallana (Trn. 1 Sur X. Cll. 18)", 
            "Carrera 1a Sur 16b2 Pp", "Carrera 1a Sur Pp", "Carrera 1a Sur Pp", 
            "Carrera 1a Sur 122 Pp", "Calle 12 Pp", "Cra 2 Sur", "Carrera 4 Sur Pp", 
            "Carrera 4 Sur 121 Pp", "Carrera 9 Sur, #12-48", "Carrera 4 Sur 13a1pp", 
            "Carrera 4 Sur 141 Pp", "Cra. 4 Sur", "Cra. 6s X Cra. 9s", "Carrera 7 Sur, 2-90", 
            "Carrera 7 Sur, 2-90", "Carrera 7 Sur, 17a35", "Cra. 7s X Cll. 17b", 
            "Calle 19, #16-10", "Galán (Cra. 8a Sur X Cll. 19)", 
            "Casa Cultural Del Sur (Cra. 8a Sur X Cll. 21)", "Carrera 8 Sur, 21-08", 
            "Kennedy (Cll. 24 X Cll. 10 Sur)", "Cra. 9a X Cll. 24", "Carrera 7a Sur, 23-67", 
            "Jardín Infantil Colmenitas (Cll. 23 X Cra. 11 Sur)", 
            "Ie José Antonio Ricaurte (Cra. 11 Sur X Cll. 21)", 
            "Ricaurte (Cra. 11 Sur X Cll. 20a)", "Carrera 11a Sur, 20-91", "Calle 20 Pp", 
            "Mercacentro #8", "Calle 20 11b Sur2 Pp", "Calle 20 Pp", "Cll. 20", "Calle 20 Pp", 
            "Calle 20 Pp", "Cll. 20 X Cra. 18s", "Calle 20 Pp", "Cll. 20 X Cra. 20s", 
            "Calle 20 24 Sur167 Pp", "Cll. 20 X Cra. 29s", "Cra. 25 X Av. Ricaurte", 
            "Cll. 18 X Cra. 25 Sur", "Cll. 18 X Cra. 28 Sur", "Cll. 18 X Cll. 19", 
            "Terminal Barrio Jazmín", "Variante Ib-Ar Pp", "Carrera 36c Sur, 20-35", 
            "Avenida Ricaurte, 37-90", "Multifamiliares El Tejar (Cll. 19 X Cra. 38 Sur)", 
            "Terminal Boqueron"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Domingo: 05:00-21:00",
        color: "#800080",
        direccion: "Boquerón",
        duracion: "68 min",
        paradasCount: 132,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "14 min",
            busesActivos: 3,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(132, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 7,
        nombre: "LÍNEA 6 - ARBOLEDA CAMPESTRE",
        descripcion: "Ruta Colinas Del Sur - Arboleda Campestre",
        paradas: [
            "Colina I (Cra. 20a Sur X Cll. 13)", "Colina I (Cra. 21 Sur X Cll. 15)", 
            "San Isidro", "Cra. 20 X Cll. 18", "Carrera 20 Sur, 1721", 
            "Carrera 20 Sur, 17-67", "Carrera 20 Sur, 17-67", "Cll. 20 X Cra. 20s", 
            "Cll. 20 X Cra. 20 Sur", "Calle 20, 2108", 
            "Batallón Jaime Rooke (Av. Ricaurte X Cra. 16 Sur)", 
            "Conjunto Residencial Lotus (Av. Ricaurte X Cra. 14 Sur)", 
            "Br. Ricaurte (Av. Ricaurte X Calle 21)", "Calle 20 Pp", "Mercacentro #8", 
            "Avenida Ricaurte X Cra. 11 Sur", "Calle 20 11 Sur1 Pp", "Barrio Ricaurte", 
            "Av. Ricaurte X Cll. 15", "Cra. 6s X Cra. 9s", "Carrera 4 Sur 14a2 Pp", 
            "Carrera 4 Sur 1364 Pp", "Carrera 4 Sur Pp", "Cra. 2 Sur", "Carrera 2 Sur Pp", 
            "Carrera 2 Sur Pp", "Cra. 2 X Cll. 15", "Carrera 2 Sur Pp", 
            "Carrera 2 Sur 15a39 Pp", "Carrera 2 Sur Pp", "Carrera 2 Sur Pp", 
            "Carrera 2 Sur Pp", "Carrera 2 Sur Pp", "Carrera 2 Sur Pp", 
            "Matallana (Cll. 20 X Trn. 1 Sur)", "Carrera 2 Sur Pp", "Cra. 20 X Cra. 1", 
            "Terminal De Transporte (Cra. 1 X Cll. 20)", "Cra. 1 X Cll. 18", 
            "Carrera 1 171 Pp", "Carrera 1 161 Pp", "Cra. 1 X Cll. 16", 
            "Centro (Cll. 16 X Cra. 3)", "Carrera 5, 15-96", "Cra. 5 X Cll. 16", 
            "Cra. 5 X Cll. 20", "Plaza 21", "Cra. 5 X Cll. 22", "Cra. 5 X Cll. 23", 
            "Cra. 5 X Cll. 26", "Centro Comercial La 5", "Liceo Nacional", 
            "Cra. 5 X Cll. 34", "Cra. 5 X Cll. 35 / Cádiz", "Cra. 5 X Cll. 39 / Colpatria", 
            "Los Olivos", "Cra. 5 X Cll. 42", "Piscinas Olimpicas", "Cll. 42 X Cra. 4d", 
            "Cra. 4 X Cll. 42", "Cra. 4 X Cll. 42a", "Sena", "Av. Mirolindo X Cll. 45", 
            "Fiscalía General De La Nación", "Av. Mirolindo X Cll 58", 
            "Cll. 58 X Cra. 5 Sur (Varsovia)", "Clínica Nuestra", "Av. Mirolindo X Cll. 60", 
            "La Tienda Del Cafe", "Av Mirolindo Pp", "Glorieta Mirolindo Lado Sur", 
            "Tereque", "Mercacentro #10", "Recreacafe", "Clínica Avidanti", 
            "Aparco (Av. Mirolindo X Cll. 111)", "Av. Mirolindo X Cll. 116", 
            "Av. Mirolindo X Cll. 117", "Villa Marina", "Cll. 122 X Cra. 45", 
            "Cll.125 X Cra. 44a", "Parque Ciudadela Comfenalco", "Terminal Ciudadela Comfenalco", 
            "Ciudadela Comfenalco", "Cll. 126 X Cra. 44", "Cra. 44b X Cll. 126", 
            "Cll. 126 X Cra. 45 Sur", "Club Campestre", "Centro Recreacional Comfenalco", 
            "Sena Industrial", "Arboleda (Av. Mirolindo X Cll. 143)", "Glorieta Picaleña", 
            "Glorieta Variante", "Ingreso Arboleda Campestre", 
            "Ie José Joaquín Florez Arboleda", "Calle 92, 2-35"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Domingo: 05:00-21:00",
        color: "#008080",
        direccion: "Arboleda Campestre",
        duracion: "66 min",
        paradasCount: 97,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "12 min",
            busesActivos: 3,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(97, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 8,
        nombre: "LÍNEA 6 - COLINAS DEL SUR",
        descripcion: "Ruta Arboleda Campestre - Colinas Del Sur",
        paradas: [
            "Carrera 22 Sur 156", "Carrera 22 Sur 154-81", "Carrera 22 Sur 154b81", 
            "Calle 154", "Ruta Sin Nombre", "Carrera 21 Sur 145", 
            "Yarumo Arboleda Campestre", "Carrera 21 Sur", "Glorieta Picaleña", 
            "Glorieta Picaleña", "Casa De La Moneda", "Sena Industrial", 
            "Ciudadela Comfenalco", "Club Campestre", "Cll. 126 X Cra. 45 Sur", 
            "Parque Ciudadela Comfenalco", "Terminal Ciudadela Comfenalco", 
            "Ciudadela Comfenalco", "Cll. 126 X Cra. 44", "Cll. 123 X Cra. 44b", 
            "Cll. 122 X Cra. 45", "Villa Marina", "Av. Mirolindo X Cll. 117", 
            "Av. Mirolindo X Cll. 115", "Recreacafe", "Mercacentro No. 10 / El Poblado", 
            "Estancomodos", "Serviarros", "Mirolindo", "Via Bogota", "Villa Cafe", 
            "Villa Café", "Villa Café", "Av. Mirolindo", "Honda", "Av Mirolindo Pp", 
            "Av Mirolindo Pp", "Cll. 60 X Av. Mirolindo", "Clínica Nuestra", 
            "Cll. 58 X Cra. 5 Sur (Varsovia)", "Av. Mirolindo X Cll. 44", "Almacafé", 
            "Enertolima", "Colsanitas Mirolindo", "Sena", "Carrera 4 42a1", 
            "Carrera 4 42a1", "Iglesia San Judas Tadeo", "Cll. 42 X Cra. 4d", 
            "Piscinas Olimpicas", "Nueva Eps", "Cll. 43 X Cra. 6", "Movistar", "Yamaha", 
            "Colegio De San Simon", "Cra. 5 X Cll. 34", "Carrera 5a, 3233", 
            "Cra. 5 X Cll. 30", "Edificio M-30", "Cra. 5 X Cll. 26", "Sitsa", 
            "El Carmen (Cra. 5 X Cll. 23)", "Cra. 5 X Cll. 22", 
            "Plaza De La 21 (Cra. 5 X Cll. 21)", "Colegio Boyacá (Cra. 5 X Cll. 20)", 
            "El Carmen (Cra. 5 X Cll. 15)", "Centro (Cra. 5 X Cll. 14)", 
            "Centro (Cra. 6 X Cll. 14)", "Cll. 15 X Cra. 6", "Cll. 15 X Cra. 5 - 4", 
            "Cll. 15 X Cra. 4 - 3", "Calle 15 21 Pp", "Cll. 15 X Cra. 2 - 3", 
            "Carrera 2 152 Pp", "Carrera 2, 1542", "Cra. 2 X Cll. 16", 
            "Parque Andrés López De Galarza (Cra. 2 X Cll. 18)", "Centro (Cll. 18 X Cra. 1)", 
            "Matallana (Trn. 1 Sur X. Cll. 18)", "Matallana (Cll. 20 X Trn. 1 Sur)", 
            "Carrera 2 Sur Pp", "Cra. 20 X Cra. 1", "Cra. 1 Sur", 
            "Carrera 1a Sur 16b2 Pp", "Carrera 1a Sur Pp", "Carrera 1a Sur Pp", 
            "Carrera 1a Sur 122 Pp", "Calle 12 Pp", "Cra 2 Sur", "Carrera 4 Sur Pp", 
            "Carrera 9 Sur, #12-48", "Carrera 4 Sur 13a1pp", "Carrera 4 Sur 141 Pp", 
            "Cra. 4 Sur", "Carrera 9 Sur 141 Pp", "Av. Ricaurte X Cll. 15", 
            "Carrera 9 Sur 151 Pp", "Calle 20 9 Sur2 Pp", "Calle 20 9 Sur2 Pp", 
            "Carrera 11a Sur, 20-91", "Avenida Ricaurte X Cra. 11 Sur", "Mercacentro #8", 
            "Calle 20 11b Sur2 Pp", "Calle 20 Pp", "Cll. 20", "Calle 20 Pp", 
            "Cll. 20 X Cra. 18s", "Calle 20 Pp", "Cll. 20 X Cra. 20s", 
            "Carrera 20 Sur, 17-67", "Carrera 20 Sur, 1721", "Cra. 20 X Cll. 18", 
            "San Isidro", "Colina I (Cra. 21 Sur X Cll. 15)", "Colina I (Cra. 20a Sur X Cll. 13)"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Domingo: 05:00-21:00",
        color: "#FF4500",
        direccion: "Colinas Del Sur",
        duracion: "65 min",
        paradasCount: 115,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "16 min",
            busesActivos: 2,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(115, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 9,
        nombre: "LÍNEA 8 - LA POLA",
        descripcion: "Ruta Protecho - La Pola",
        paradas: [
            "Terminal Nueva Castilla", "Nueva Castilla", "Carrera", "Cra. 4 A Sur", 
            "Cra. 1 Bis Sur X Cll.116", "Terminal Protecho B", "Topacio (Cll. 108 X Cra. 2 Bis Sur)", 
            "Topacio (Cra. 3 X Cll. 108)", "Topacio (Cra. 3 X Cll. 112)", 
            "Topacio (Cll. 116 X Cra. 3)", "Topacio (Cra. 3 X Cll. 112)", 
            "Topacio (Cra. 3 X Cll. 108)", "Cra. 5 X Cll. 108", "Cra. 5 X Cll. 103", 
            "Cra. 5 X Cll. 103", "Cra. 5 X Cll. 99", "Cra. 5 X Cll. 95b", 
            "Cra. 5 X Cll. 91", "Cra. 5 X Cll. 87", "Éxito", "Jordán 6ta Etapa", 
            "Cra. 5 X Cll. 77", "Cra. 5 X Cll. 69 - Colegio La Sagrada Familia", 
            "Multicentro (Cra. 5 X Cll. 61a)", "Hospital Federico Lleras Acosta Sede Limonar", 
            "Cra. 5 X Call. 47", "Piedrapintada (Cra. 5 X Cll. 44)", "Centro Médico Javeriano", 
            "Cra. 5 X Cll. 43", "Icbf / Unidad Deportiva La 42", "Cra. 5 X Cll. 41", 
            "Movistar", "Yamaha", "Fontainebleu", "Colegio De San Simon", 
            "Cra. 5 X Cll. 34", "Cra. 5 X Cll. 30", "Edificio M-30", "Cra. 5 X Cll. 26", 
            "Sitsa", "El Carmen (Cra. 5 X Cll. 23)", "Cra. 5 X Cll. 22", 
            "Plaza De La 21 (Cra. 5 X Cll. 21)", "Colegio Boyacá (Cra. 5 X Cll. 20)", 
            "Iglesia Del Carmen (Cra. 5 X Cll. 18)", "El Carmen (Cra. 5 X Cll. 15)", 
            "Centro (Cra. 5 X Cll. 14)", "Cra. 5 X Cll. 12", "Cun", "Skate Plaza", 
            "Sexta Brigada (Cra. 8 X Cll. 12)", "Museo Panóptico (Cra. 8 X Cll. 10)", 
            "Belén (Cll. 10 X Cra. 11)", "Cra. 11 X Cll. 6", "Cra. 11b X Cll. 6", 
            "Cra. 11b X Cll. 5", "20 De Julio (Cra. 12 X Cll. 5)", "Cll. 3 X Cra. 13", 
            "Cra. 12 X Cll. 3", "Cra. 12 X Cll. 3", "Cll. 4 X Cra. 12", "Cll. 4 X Cra. 11", 
            "Cra. 8 X Cll. 3", "Cra. 7 X Cll. 5", "Irazú La Pola (Cll. 3 X Cra. 5)", 
            "La Pola (Cra. 4 X Cll. 4)"
        ],
        tipo: "principal",
        frecuencia: "15-20 min",
        horario: "Lunes a Viernes: 04:50-22:00 | Sábado y Domingo: 05:00-09:56",
        color: "#2E8B57",
        direccion: "La Pola",
        duracion: "45 min",
        paradasCount: 66,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "8 min",
            busesActivos: 4,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(66, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 10,
        nombre: "LÍNEA 8 - PROTECHO",
        descripcion: "Ruta La Pola - Protecho",
        paradas: [
            "La Pola (Cra. 4 X Cll. 4)", "La Pola (Cra. 4 X Cll. 5a)", "Cll. 6 X Cra. 7", 
            "Cra. 7 X Cll. 8", "Cra. 7a X Cll. 10", "Cll. 10 X Cra 5a", 
            "Centro (Cra. 5 X Cll. 12)", "Cra. 5 X Cll. 16", "Cra. 5 X Cll. 20", 
            "Plaza 21", "Cra. 5 X Cll. 22", "Cra. 5 X Cll. 23", "Cra. 5 X Cll. 25", 
            "Cra. 5 X Cll. 26", "Centro Comercial La 5", "Liceo Nacional", 
            "Cra. 5 X Cll. 34", "Cra. 5 X Cll. 35 / Cádiz", "Cra. 5 X Cll. 39 / Colpatria", 
            "Los Olivos", "Cra. 5 X Cll. 42 / Unidad Deportiva La 42", 
            "Coliseo Enrique Triana Castilla", "Glorieta Monumento A La Paz", "Sena", 
            "Versalles", "Cra. 5 X Cll. 47", "Cra. 5 X Cll. 50", 
            "Hospital Federico Lleras - Sede El Limonar", "Cra. 5 X Cll. 60", "Multicentro", 
            "Arkacentro", "Cra. 5 X Cll. 69", "Cra. 5 X Cll. 74", "Éxito", "Cra. 5 X Cll. 86", 
            "Cra. 5 X Cll. 91", "Cra. 5 X Cll. 95b", "Cra. 5 X Cll. 99", "Cra. 5 X Cll. 103", 
            "Cra. 5 X Cll. 108", "Topacio (Cra. 3 X Cll. 108)", "Topacio (Cra. 3 X Cll. 112)", 
            "Topacio (Cll. 116 X Cra. 3)", "Topacio (Cra. 3 X Cll. 112)", 
            "Topacio (Cra. 3 X Cll. 108)", "Topacio (Cll. 108 X Cra. 2 Bis Sur)", 
            "Terminal Protecho B", "Cra. 1 Bis Sur X Cll.116", "Nueva Castilla", 
            "Nueva Castilla", "Terminal Nueva Castilla"
        ],
        tipo: "principal",
        frecuencia: "15-20 min",
        horario: "Lunes a Domingo: 05:00-22:30",
        color: "#DC143C",
        direccion: "Protecho",
        duracion: "62 min",
        paradasCount: 51,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "11 min",
            busesActivos: 3,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(51, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 11,
        nombre: "LÍNEA 9 - NUEVA CASTILLA",
        descripcion: "Ruta Villa Adriana - Nueva Castilla",
        paradas: [
            "Cra. 12 X Cll. 3", "Cll. 4 X Cra. 12", "Cll. 4 X Cra. 11", "Alaska", 
            "Cra. 8 X Cll. 3", "Cra. 7 X Cll. 5", "Cra. 7 X Cll. 5", "Cll. 6 X Cra. 7", 
            "Cra. 7 X Cll. 8", "Cra. 7a X Cll. 10", "Cll. 10 X Cra 5a", 
            "Biblioteca Soledad Rengifo (Cll. 10 X Cra. 4)", "Parque Murillo Toro (Cra. 4 X Cll. 10a)", 
            "Cra. 4 X Cll. 13", "Cra. 4 X Cll. 14", "Cra. 4 X Cll. 16", "Cra. 4 X Cll. 18", 
            "Parque Andrés López De Galarza", "Monumento A La Bandera", "Cll. 19 X Cra. 1", 
            "Terminal De Transporte", "Av. Ferrocarril X Cra. 2", "Av. Ferrocarril X Cll. 25", 
            "Cra. 4 X Cll. 27", "Cra. 4 X Cll. 29", "Carrera 4 30-61", "Cra. 4 X Cll. 34", 
            "Cra. 4 X Cll. 35", "Estadio", "Carrera 4 382", "Cra. 4 X Cll. 40", 
            "Universidad Del Tolima", "Cra. 4 X Cll. 42a", "Sena", "Av. Mirolindo X Cll. 45", 
            "Fiscalía General De La Nación", "Av. Mirolindo X Cll 58", 
            "Cll. 58 X Cra. 5 Sur (Varsovia)", "Clínica Nuestra", "Cll. 60 X Cra. 1a", 
            "Cra. 2 X Cll. 64", "Cra. 3 X Cll. 67", "Polideportivo Bocaneme", 
            "Cra. 4 X Cll. 71", "Cra. 4 X Cll. 75", "Cra. 4 X Cll. 78", "Cra. 4 X Cll. 80", 
            "Cra. 1 X Cll 80", "Av. Pedro Tafur X Cra. 2", "Cra. 3 X Av. Pedro Tafur", 
            "Cra. 3 X Cll. 86", "Cra. 3 X Cll. 88", "Cll. 88 X Cra. 2", "Cra. 2 X Cll. 81", 
            "Cra. 2 X Cll. 96", "Cra. 2 X Cll. 96", "Cll. 100 X Cra. 2", 
            "Nuevo Armero (Cra. 3 X Cll. 100)", "Aguamarina (Cra. 3 X Cll. 104)", 
            "Topacio (Cra. 3 X Cll. 108)", "Topacio (Cra. 3 X Cll. 112)", 
            "Topacio (Cll. 116 X Cra. 3)", "Topacio (Cra. 3 X Cll. 112)", 
            "Topacio (Cra. 3 X Cll. 108)", "Topacio (Cll. 108 X Cra. 2 Bis Sur)", 
            "Terminal Protecho B", "Cra. 1 Bis Sur X Cll.116", "Cra. 4 A Sur", 
            "Nueva Castilla", "Terminal Nueva Castilla"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Domingo: 05:00-21:30",
        color: "#4B0082",
        direccion: "Nueva Castilla",
        duracion: "45 min",
        paradasCount: 70,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "13 min",
            busesActivos: 3,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(70, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 12,
        nombre: "LÍNEA 9 - VILLA ADRIANA",
        descripcion: "Ruta Nueva Castilla - Villa Adriana",
        paradas: [
            "Terminal Nueva Castilla", "Nueva Castilla", "Cra. 4 A Sur", 
            "Cra. 1 Bis Sur X Cll.116", "Terminal Protecho B", "Topacio (Cll. 108 X Cra. 2 Bis Sur)", 
            "Topacio (Cra. 3 X Cll. 108)", "Topacio (Cra. 3 X Cll. 112)", 
            "Topacio (Cll. 116 X Cra. 3)", "Topacio (Cra. 3 X Cll. 112)", 
            "Topacio (Cra. 3 X Cll. 108)", "Aguamarina (Cra. 3 X Cll. 104)", 
            "Nuevo Armero (Cra. 3 X Cll. 100)", "Cra. 2 X Cll. 100", 
            "Jardín Santander (Cll. 96 X Cra. 2)", "Reservas Del Jardín (Cra. 3 X Cll. 96)", 
            "Cra. 3 X Cll. 91", "Cra. 2 X Cll. 81", "Cra. 2 X Cll. 86", "Cra. 3 X Cll. 86", 
            "Cra. 4 X Cll. 86", "Cra. 4 X Av. Pedro Tafur", "Av. Pedro Tafur X Cra. 4", 
            "Cra. 4 X Cll. 78", "Cra. 4 X Cll. 75", "Cra. 4 X Cll. 71", "Polideportivo Bocaneme", 
            "Cra. 3 X Cll. 67", "Cra. 2 X Cll. 64", "Cra. 2 X Cll.60", "Clínica Nuestra", 
            "Cll. 58 X Cra. 5 Sur (Varsovia)", "Av. Mirolindo X Cll. 44", "Almacafé", 
            "Enertolima", "Colsanitas Mirolindo", "Sena", "Iglesia San Judas Tadeo", 
            "Cra. 4 X Cll 40", "Carrera 4 39-29", "Estadio", "Carrera 4 35-53", 
            "Hospital Federico Lleras", "Cra. 4a X Cll. 34", "Cra. 4a X Cll. 31", 
            "Carrera 4a 28a1", "Ferrocarril Pp", "Av. Ferrocarril X Cra. 4", 
            "Av Ferrocaril Crr 2", "Comando Policía Ibagué", 
            "Br. Estación (Av. Ferrocarril X Cll. 21)", "Cll. 19 X Cra. 1", 
            "Cra. 1 X Cll. 18", "Cra. 1 X Cll. 16", "Carrera 1 151", "Calle 15 12 Pp", 
            "Cll. 15 X Cra. 2 - 3", "Cll. 15 X Cra 3 - 4", "Cll. 15 X Cra. 4 - 5", 
            "Pueblo Nuevo (Cra. 8 X Cll. 15)", "Sexta Brigada (Cra. 8 X Cll. 12)", 
            "Museo Panóptico (Cra. 8 X Cll. 10)", "Belén (Cll. 10 X Cra. 11)", 
            "20 De Julio (Cll. 11 X Cra. 12)", "20 De Julio (Cra. 12 X Cll. 5)", 
            "Cra. 12 X Cll. 3", "Cra. 12 X Cll. 1b", "Cra. 12 X Cll. 1b", "Cll. 3 X Cra. 13", 
            "Cra. 12 X Cll. 3"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Viernes: 04:55-21:00 | Sábado y Domingo: 05:20-19:56",
        color: "#FFD700",
        direccion: "Villa Adriana",
        duracion: "66 min",
        paradasCount: 70,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "17 min",
            busesActivos: 2,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(70, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 13,
        nombre: "LÍNEA 11 - CALLE 15",
        descripcion: "Ruta La Ceibita - Calle 15",
        paradas: [
            "Terminal La Ceibita", "Conjunto Anawac (Cra. 14 X Cll. 165)", 
            "Cra. 14 X Cll. 161", "Cra. 14 X Cll. 160", "Protecho El Salado (Cll. 161 X Cra. 8j)", 
            "Modelia (Cll. 160 X Cra. 8d Bis)", "Br. Chico (Cll. 156a X Cra. 8j)", 
            "Cra. 14 X Cll. 155 Crr 14a", "Centro Recreacional Comfatolima", 
            "Cra. 14 X Cll. 150", "Ciudadela El Porvenir", "Cra. 14 X Cll. 145", 
            "Cra. 14 X Cll. 143", "Iet Francisco De Paula Santander (Cra. 14 X Cll.137a)", 
            "Cra. 14 X Cll. 133", "Cra. 14 X Cll. 129", "Cra. 14 X Cll. 125", 
            "Cra. 14 X Cll. 121", "Urb. La Floresta (Cra. 9 X Cll. 120)", 
            "Av. Ambalá X Cll. 115", "Av. Ambalá X Cll. 110", "Universidad Cooperativa De Colombia", 
            "Av. Ambalá X Cll. 103", "Av. Ambalá X Cll. 100", "Colinas Del Norte (Av. Ambalá X Cll. 99)", 
            "Av. Ambalá X Cll. 97", "Av. Ambalá X Cll. 96", "Cai La Gaviota (Av. Ambalá X Cll. 93)", 
            "Av. Ambala X Cll. 88", "Calleja Del Vergel", "Av. Ambalá X Cll. 80", 
            "Av. Ambalá X Cll. 75", "Av. Ambalá X Cll. 68", "Avenida Ambala - Montemadero", 
            "Comfatolima", "Cll. 69 X Cra. 10", "Cll. 69 X Cra. 8", 
            "Club Residencial Alameda (Cll. 69 X Cra. 7)", "Multicentro (Cra. 5 X Cll. 61a)", 
            "Hospital Federico Lleras Acosta Sede Limonar", "Cra. 5 X Call. 47", 
            "Piedrapintada (Cra. 5 X Cll. 44)", "Av. Ferrocarril X Cll. 42", 
            "Av. Ferrocarril X Cll. 41", "Av. Ferrocarril X Cll. 40", "Av. Ferrocarril X Cll. 37", 
            "Av. Ferrocarril X Cll. 35", "Ferrocarril Pp", "Av. Ferrocarril X Cll. 28", 
            "Av. Ferrocarril X Cra. 4", "Comando Policía Ibagué", 
            "Br. Estación (Av. Ferrocarril X Cll. 21)", "Cll. 19 X Cra. 1", 
            "Cra. 1 X Cll. 18", "Cra. 1 X Cll. 16", "Calle 15 12 Pp"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Viernes: 04:40-20:58 | Sábado y Domingo: 05:00-20:00",
        color: "#00CED1",
        direccion: "Calle 15",
        duracion: "58 min",
        paradasCount: 56,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "9 min",
            busesActivos: 3,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(56, [4.430, -75.260], [4.490, -75.200])
    },
    {
        id: 14,
        nombre: "LÍNEA 11 - LA CEIBITA",
        descripcion: "Ruta Calle 15 - La Ceibita",
        paradas: [
            "Calle 15 12 Pp", "Cll. 15 X Cra. 2 - 3", "Cll. 15 X Cra 3 - 4", 
            "Cra. 4 X Cll. 16", "Cra. 4 X Cll. 18", "Plaza De La 21 (Cra. 4 X Cll. 20)", 
            "Plaza 21", "Cra. 4 X Cll. 23", "Br. Estación (Cra. 4 X Cll. 24)", 
            "Av. Ferrocarril X Cll. 28", "Av. Ferrocarril X Cll. 34", "Av. Ferrocarril X Cll. 35", 
            "Av. Ferrocarril X Cll. 40", "Av. Ferrocarril X Cll. 41", "Av. Ferrocarril X Cll. 42", 
            "Sena", "Sena", "Versalles", "Cra. 5 X Cll. 47", "Cra. 5 X Cll. 50", 
            "Hospital Federico Lleras - Sede El Limonar", "Cra. 5 X Cll. 60", "Multicentro", 
            "Arkacentro", "Jordan 1ra Etapa (Cra. 5 X Cll. 65a)", "Jordán 3ra Etapa (Cra. 5 X Cll. 71)", 
            "Jordán 8va Etapa (Cra. 7 X Cll. 71)", "Jordán 8va Etapa (Cra. 7 X Cll. 69)", 
            "Cra. 8 X. Calle 69.", "Cll. 69 X Cra. 10", "Centro Comercial Plazas Del Bosque", 
            "Av. Ambala X Calle 69", "Av. Ambalá X Cll. 68", "Av. Ambalá X Cll. 76", 
            "Entre Ríos (Av. Ambalá X Cll. 77)", "Av. Ambalá X Cll. 80- Cr14", 
            "Pedregal X Cll 83 - Cr 14", "Carrera 17 851 Pp", "Arroyuelos", "Ambala", 
            "Av. Ambalá X Cll. 93 Crr 14", "Av. Ambalá X Cll. 96 Cr 20", "Av. Ambalá X Cll. 97 Cr 20", 
            "Colinas Del Norte (Av. Ambalá X Cll. 99)", "Av. Ambalá X Cll. 100", 
            "Av. Ambalá X Cll. 103", "Universidad Cooperativa De Colombia", 
            "Av. Ambalá X Cll. 115", "Urb. Cantabria (Cra. 14 X Cll. 119)", 
            "Cra. 14 X Cll. 123", "Cra. 14 X Cll. 125", "Cra. 14 X Cll. 129", 
            "Cra. 14 X Cll. 133", "Escuela El Salado", "Cra. 14 X Cll. 139", 
            "Cra. 14 X Cll. 143", "El Salado", "Ciudadela El Porvenir", "Cra. 14 X Cll. 150", 
            "Terminal Casablanca (Cra. 14 X Cll. 153)", "Cra. 14 X Cll. 155", 
            "Br. Chico (Cll. 156a X Cra. 8j)", "Modelia (Cra. 8d X Cll. 157)", 
            "Modelia (Cll. 160 X Cra. 8d Bis)", "Cra. 14 X Cll. 160", 
            "Conjunto Anawac (Cra. 14 X Cll. 165)", "Terminal La Ceibita"
        ],
        tipo: "principal",
        frecuencia: "20-25 min",
        horario: "Lunes a Domingo: 05:00-22:30",
        color: "#FF69B4",
        direccion: "La Ceibita",
        duracion: "60 min",
        paradasCount: 67,
        tarifa: {
            normal: "$2.900 COP",
            domingoFestivo: "$3.000 COP",
            descripcion: "Lunes a Sábado: $2.900 | Domingos/Festivos: $3.000"
        },
        operador: "Transporte Ibagué S.A.",
        tiempoReal: {
            siguienteBus: "15 min",
            busesActivos: 4,
            estado: "Normal"
        },
        coordenadas: generarCoordenadasAleatorias(67, [4.430, -75.260], [4.490, -75.200])
    }
];

// Función auxiliar para generar coordenadas aleatorias
function generarCoordenadasAleatorias(cantidad, minCoords, maxCoords) {
    const coordenadas = [];
    for (let i = 0; i < cantidad; i++) {
        const lat = minCoords[0] + (maxCoords[0] - minCoords[0]) * Math.random();
        const lng = minCoords[1] + (maxCoords[1] - minCoords[1]) * Math.random();
        coordenadas.push([lat, lng]);
    }
    return coordenadas;
}

// Rutas frecuentes (más utilizadas)
const rutasFrecuentes = [1, 2, 3, 4, 5, 6, 9, 10];

// =============================================
// SISTEMA DE BÚSQUEDA MEJORADO
// =============================================

// Diccionario de sinónimos y lugares relacionados
const diccionarioUbicaciones = {
    // Centros comerciales
    "centro comercial la estación": ["cc la estación", "la estación", "estación"],
    "multicentro": ["centro comercial multicentro", "cc multicentro"],
    "arkacentro": ["centro comercial arkacentro", "cc arkacentro"],
    "plaza de la 21": ["plaza 21", "la 21"],
    
    // Universidades
    "universidad del tolima": ["udt", "university", "universidad"],
    "universidad de ibagué": ["unibague", "uniibague"],
    "universidad cooperativa": ["unicoop", "cooperativa"],
    "sena": ["servicio nacional de aprendizaje"],
    
    // Hospitales
    "hospital federico lleras": ["hospital lleras", "federico lleras", "hospital"],
    "clínica nuestra": ["clinica nuestra", "nuestra señora"],
    
    // Barrios y zonas
    "belén": ["barrio belén", "zona belén"],
    "delicias": ["barrio delicias", "zona delicias"],
    "la ceibita": ["barrio la ceibita", "ceibita"],
    "nueva castilla": ["barrio nueva castilla", "castilla"],
    "protecho": ["barrio protecho", "zona protecho"],
    "cañaveral": ["barrio cañaveral", "zona cañaveral"],
    "arboleda campestre": ["arboleda", "campestre"],
    "colinas del sur": ["colinas", "colinas sur"],
    "la pola": ["barrio la pola", "zona la pola"],
    "clarita botero": ["barrio clarita botero", "clarita"],
    
    // Terminales
    "terminal de transporte": ["terminal", "estación de buses", "buses"],
    "terminal delicias": ["delicias terminal"],
    "terminal boqueron": ["boquerón terminal"],
    
    // Puntos de referencia
    "estadio": ["estadio de fútbol", "cancha"],
    "parque murillo toro": ["parque murillo", "murillo toro"],
    "plaza de bolívar": ["plaza bolivar", "centro histórico"],
    "centro": ["centro histórico", "zona centro", "downtown"]
};

// Función de búsqueda mejorada
function buscarRutasAvanzado(origen, destino) {
    if (!origen && !destino) return [];
    
    const origenNormalizado = origen ? origen.toLowerCase().trim() : '';
    const destinoNormalizado = destino ? destino.toLowerCase().trim() : '';
    
    // Obtener sinónimos para mejorar la búsqueda
    const sinonimosOrigen = obtenerSinonimos(origenNormalizado);
    const sinonimosDestino = obtenerSinonimos(destinoNormalizado);
    
    // Buscar rutas que coincidan
    const rutasCoincidentes = rutasIbagué.map(ruta => {
        const puntuacion = calcularPuntuacionRuta(ruta, sinonimosOrigen, sinonimosDestino, origenNormalizado, destinoNormalizado);
        return { ruta, puntuacion };
    })
    .filter(item => item.puntuacion > 0)
    .sort((a, b) => b.puntuacion - a.puntuacion)
    .map(item => item.ruta);
    
    return rutasCoincidentes;
}

// Obtener sinónimos para un término de búsqueda
function obtenerSinonimos(termino) {
    const sinonimos = [termino];
    
    // Buscar en el diccionario
    for (const [clave, valores] of Object.entries(diccionarioUbicaciones)) {
        if (clave.includes(termino) || termino.includes(clave)) {
            sinonimos.push(clave, ...valores);
        }
        // También verificar si algún sinónimo coincide
        for (const valor of valores) {
            if (valor.includes(termino) || termino.includes(valor)) {
                sinonimos.push(clave, ...valores);
                break;
            }
        }
    }
    
    // Eliminar duplicados y devolver
    return [...new Set(sinonimos.flat())];
}

// Calcular puntuación de relevancia para una ruta
function calcularPuntuacionRuta(ruta, sinonimosOrigen, sinonimosDestino, origen, destino) {
    let puntuacion = 0;
    
    // Verificar coincidencias en paradas
    const paradasNormalizadas = ruta.paradas.map(p => p.toLowerCase());
    
    // Buscar origen
    const indiceOrigen = encontrarMejorCoincidencia(paradasNormalizadas, sinonimosOrigen, origen);
    
    // Buscar destino
    const indiceDestino = encontrarMejorCoincidencia(paradasNormalizadas, sinonimosDestino, destino);
    
    // Si no hay origen o destino definido, buscar cualquier coincidencia
    if (!origen && !destino) {
        return 0; // No se puede buscar sin criterios
    }
    
    if (origen && destino) {
        // Buscar ruta que conecte origen y destino
        if (indiceOrigen !== -1 && indiceDestino !== -1) {
            // La ruta contiene ambos puntos
            const direccionCorrecta = indiceOrigen < indiceDestino;
            puntuacion = 100 + (direccionCorrecta ? 50 : 0);
            
            // Bonificación por cercanía de paradas
            const distanciaParadas = Math.abs(indiceDestino - indiceOrigen);
            if (distanciaParadas < 10) puntuacion += 20;
            
            // Bonificación por coincidencia exacta
            if (paradasNormalizadas.some(p => p === origen)) puntuacion += 10;
            if (paradasNormalizadas.some(p => p === destino)) puntuacion += 10;
        }
    } else if (origen) {
        // Solo buscar origen
        if (indiceOrigen !== -1) {
            puntuacion = 80;
            if (paradasNormalizadas.some(p => p === origen)) puntuacion += 10;
        }
    } else if (destino) {
        // Solo buscar destino
        if (indiceDestino !== -1) {
            puntuacion = 80;
            if (paradasNormalizadas.some(p => p === destino)) puntuacion += 10;
        }
    }
    
    return puntuacion;
}

// Encontrar la mejor coincidencia en un array de paradas
function encontrarMejorCoincidencia(paradas, sinonimos, terminoOriginal) {
    let mejorIndice = -1;
    let mejorPuntuacion = 0;
    
    paradas.forEach((parada, index) => {
        let puntuacionParada = 0;
        
        // Verificar cada sinónimo
        sinonimos.forEach(sinonimo => {
            if (parada.includes(sinonimo) || sinonimo.includes(parada)) {
                // Coincidencia parcial
                puntuacionParada = Math.max(puntuacionParada, 30);
                
                // Coincidencia exacta
                if (parada === sinonimo || parada === terminoOriginal) {
                    puntuacionParada = Math.max(puntuacionParada, 50);
                }
                
                // Coincidencia al inicio (más relevante)
                if (parada.startsWith(sinonimo) || parada.startsWith(terminoOriginal)) {
                    puntuacionParada = Math.max(puntuacionParada, 70);
                }
            }
        });
        
        // Actualizar mejor coincidencia
        if (puntuacionParada > mejorPuntuacion) {
            mejorPuntuacion = puntuacionParada;
            mejorIndice = index;
        }
    });
    
    return mejorIndice;
}

// Función para sugerir búsquedas similares
function sugerirBusquedas(origen, destino) {
    const sugerencias = [];
    
    // Buscar términos similares en el diccionario
    if (origen) {
        const origenLow = origen.toLowerCase();
        for (const [clave] of Object.entries(diccionarioUbicaciones)) {
            if (clave.includes(origenLow) || origenLow.includes(clave)) {
                sugerencias.push(`¿Quizás quisiste decir "${clave}"?`);
            }
        }
    }
    
    if (destino) {
        const destinoLow = destino.toLowerCase();
        for (const [clave] of Object.entries(diccionarioUbicaciones)) {
            if (clave.includes(destinoLow) || destinoLow.includes(clave)) {
                sugerencias.push(`¿Quizás quisiste decir "${clave}"?`);
            }
        }
    }
    
    return sugerencias;
}

// =============================================
// TABLAS DE BASE DE DATOS - CONEXIÓN USUARIO-RUTA
// =============================================

// Tabla USUARIOS
let usuarios = JSON.parse(localStorage.getItem('qruta_usuarios')) || [
    {
        id: 1,
        nombre: "Usuario Demo",
        email: "demo@qruta.com",
        fecha_registro: new Date().toISOString(),
        estado: "activo"
    }
];

// Tabla USUARIO_RUTA_FAVORITA (conexión muchos-a-muchos)
let usuarioRutaFavorita = JSON.parse(localStorage.getItem('qruta_favoritos')) || [];

// Tabla BUSQUEDAS_USUARIOS
let busquedasUsuarios = JSON.parse(localStorage.getItem('qruta_busquedas')) || [];

// Usuario actual
let usuarioActual = JSON.parse(localStorage.getItem('qruta_usuario_actual')) || null;

// =============================================
// FUNCIONES DEL SISTEMA USUARIO-RUTA
// =============================================

// Guardar datos en localStorage
function guardarDatos() {
    localStorage.setItem('qruta_usuarios', JSON.stringify(usuarios));
    localStorage.setItem('qruta_favoritos', JSON.stringify(usuarioRutaFavorita));
    localStorage.setItem('qruta_busquedas', JSON.stringify(busquedasUsuarios));
    localStorage.setItem('qruta_usuario_actual', JSON.stringify(usuarioActual));
}

// Iniciar sesión
function iniciarSesion(email, password) {
    let usuario = usuarios.find(u => u.email === email);
    if (!usuario) {
        usuario = {
            id: usuarios.length + 1,
            nombre: email.split('@')[0],
            email: email,
            fecha_registro: new Date().toISOString(),
            estado: "activo"
        };
        usuarios.push(usuario);
    }
    usuarioActual = usuario;
    guardarDatos();
    actualizarInterfazUsuario();
    showScreen('home');
    return usuario;
}

// Cerrar sesión
function cerrarSesion() {
    usuarioActual = null;
    guardarDatos();
    actualizarInterfazUsuario();
    showScreen('home');
}

// Agregar ruta a favoritos
function agregarRutaFavorita(idRuta) {
    if (!usuarioActual) {
        alert('Por favor inicia sesión para guardar rutas favoritas');
        showScreen('login');
        return false;
    }
    const existe = usuarioRutaFavorita.find(fav => fav.id_usuario === usuarioActual.id && fav.id_ruta === idRuta);
    if (!existe) {
        usuarioRutaFavorita.push({
            id_favorito: usuarioRutaFavorita.length + 1,
            id_usuario: usuarioActual.id,
            id_ruta: idRuta,
            fecha_agregado: new Date().toISOString(),
            frecuencia_uso: 0
        });
        guardarDatos();
        return true;
    }
    return false;
}

// Eliminar ruta de favoritos
function eliminarRutaFavorita(idRuta) {
    if (!usuarioActual) return false;
    const index = usuarioRutaFavorita.findIndex(fav => fav.id_usuario === usuarioActual.id && fav.id_ruta === idRuta);
    if (index !== -1) {
        usuarioRutaFavorita.splice(index, 1);
        guardarDatos();
        return true;
    }
    return false;
}

// Verificar si una ruta es favorita
function esRutaFavorita(idRuta) {
    if (!usuarioActual) return false;
    return usuarioRutaFavorita.some(fav => fav.id_usuario === usuarioActual.id && fav.id_ruta === idRuta);
}

// Obtener rutas favoritas del usuario
function obtenerRutasFavoritas() {
    if (!usuarioActual) return [];
    const favoritosIds = usuarioRutaFavorita
        .filter(fav => fav.id_usuario === usuarioActual.id)
        .map(fav => fav.id_ruta);
    return rutasIbagué.filter(ruta => favoritosIds.includes(ruta.id));
}

// Registrar búsqueda
function registrarBusqueda(origen, destino, resultados) {
    if (!usuarioActual) return;
    busquedasUsuarios.push({
        id_busqueda: busquedasUsuarios.length + 1,
        id_usuario: usuarioActual.id,
        origen: origen,
        destino: destino,
        fecha_busqueda: new Date().toISOString(),
        resultados_encontrados: resultados
    });
    guardarDatos();
}

// =============================================
// INTERFAZ DE USUARIO
// =============================================

function actualizarInterfazUsuario() {
    const userNameElement = document.getElementById('user-name');
    const menuUserName = document.getElementById('menu-user-name');
    const menuUserEmail = document.getElementById('menu-user-email');
    const welcomeUserName = document.getElementById('welcome-user-name');
    const favoriteCount = document.getElementById('favorite-count');
    const userWelcome = document.getElementById('user-welcome');
    const userFavoritesBtn = document.getElementById('user-favorites-btn');
    const loginBtn = document.getElementById('login-btn');
    const favoritesBtn = document.getElementById('favorites-btn');
    const historyBtn = document.getElementById('history-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (usuarioActual) {
        userNameElement.textContent = usuarioActual.nombre;
        menuUserName.textContent = usuarioActual.nombre;
        menuUserEmail.textContent = usuarioActual.email;
        welcomeUserName.textContent = usuarioActual.nombre;
        const favoritasCount = obtenerRutasFavoritas().length;
        favoriteCount.textContent = favoritasCount;
        userWelcome.style.display = 'block';
        userFavoritesBtn.style.display = 'block';
        loginBtn.style.display = 'none';
        favoritesBtn.style.display = 'block';
        historyBtn.style.display = 'block';
        logoutBtn.style.display = 'block';
    } else {
        userNameElement.textContent = 'Mi Cuenta';
        menuUserName.textContent = 'Invitado';
        menuUserEmail.textContent = 'Inicia sesión';
        userWelcome.style.display = 'none';
        userFavoritesBtn.style.display = 'none';
        loginBtn.style.display = 'block';
        favoritesBtn.style.display = 'none';
        historyBtn.style.display = 'none';
        logoutBtn.style.display = 'none';
    }
}

// =============================================
// FUNCIONALIDADES EXISTENTES ACTUALIZADAS
// =============================================

// Variables para el mapa y estado
let map;
let routeLayers = {};
let currentRouteFilter = 'all';
let previousScreen = 'home';

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupHomeButtons();
    setupSearch();
    loadFrequentRoutes();
    setupBackButton();
    setupMapNavigation();
    setupUserSystem();
    actualizarInterfazUsuario();
});

// Configurar sistema de usuarios
function setupUserSystem() {
    const userMenuBtn = document.getElementById('user-menu-btn');
    const userMenu = document.getElementById('user-menu');
    userMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        userMenu.classList.toggle('show');
    });
    document.addEventListener('click', function() {
        userMenu.classList.remove('show');
    });
    document.getElementById('login-btn').addEventListener('click', function() {
        showScreen('login');
        userMenu.classList.remove('show');
    });
    document.getElementById('favorites-btn').addEventListener('click', function() {
        loadUserFavorites();
        userMenu.classList.remove('show');
    });
    document.getElementById('logout-btn').addEventListener('click', function() {
        cerrarSesion();
        userMenu.classList.remove('show');
    });
    document.getElementById('do-login').addEventListener('click', function() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        if (!email) {
            alert('Por favor ingresa tu email');
            return;
        }
        iniciarSesion(email, password);
    });
    document.getElementById('user-favorites-btn').addEventListener('click', function() {
        if (!usuarioActual) {
            showScreen('login');
            return;
        }
        loadUserFavorites();
    });
}

// Cargar rutas favoritas del usuario
function loadUserFavorites() {
    if (!usuarioActual) {
        showScreen('login');
        return;
    }
    const container = document.getElementById('favorites-list');
    const rutasFavoritas = obtenerRutasFavoritas();
    if (rutasFavoritas.length === 0) {
        container.innerHTML = `
            <article class="route-card">
                <p>No tienes rutas favoritas guardadas. Agrega algunas desde los detalles de las rutas.</p>
            </article>
        `;
    } else {
        let html = '';
        rutasFavoritas.forEach(ruta => {
            html += crearTarjetaRuta(ruta, true);
        });
        container.innerHTML = html;
    }
    showScreen('user-favorites');
}

// Función auxiliar para crear tarjetas de ruta
function crearTarjetaRuta(ruta, esFavorita = false) {
    const esFav = esFavorita || esRutaFavorita(ruta.id);
    return `
        <article class="route-card" style="border-left-color: ${ruta.color}" onclick="showRouteDetails(${ruta.id})">
            <div class="route-favorite-icon ${esFav ? 'favorited' : ''}" onclick="event.stopPropagation(); toggleFavorite(${ruta.id})">
                <i class="fas fa-heart"></i>
            </div>
            <header class="route-header">
                <h3 class="route-name">${ruta.nombre}</h3>
                <span class="route-direction">→ ${ruta.direccion}</span>
            </header>
            <section class="route-info">
                <p><strong>Horario:</strong> ${ruta.horario}</p>
                <p><strong>Frecuencia:</strong> ${ruta.frecuencia}</p>
                <p><strong>Duración:</strong> ${ruta.duracion}</p>
                <p><strong>Tarifa:</strong> ${ruta.tarifa.descripcion}</p>
            </section>
            ${esFav ? '<div class="favorite-badge">FAVORITA</div>' : ''}
        </article>
    `;
}

// Alternar favorito
function toggleFavorite(idRuta) {
    if (!usuarioActual) {
        alert('Inicia sesión para guardar rutas favoritas');
        showScreen('login');
        return;
    }
    if (esRutaFavorita(idRuta)) {
        eliminarRutaFavorita(idRuta);
    } else {
        agregarRutaFavorita(idRuta);
    }
    actualizarInterfazUsuario();
    const screen = document.querySelector('.screen.active').id;
    if (screen === 'user-favorites') {
        loadUserFavorites();
    } else if (screen === 'frequent') {
        loadFrequentRoutes();
    }
}

// Buscar rutas (actualizada)
function searchRoutes(origin, destination) {
    const resultsContainer = document.getElementById('search-results');
    
    // Limpiar resultados anteriores
    resultsContainer.innerHTML = '<div class="loading">Buscando rutas...</div>';
    
    // Pequeño delay para mejor experiencia de usuario
    setTimeout(() => {
        const resultados = buscarRutasAvanzado(origin, destination);
        
        if (usuarioActual) {
            registrarBusqueda(origin, destination, resultados.length);
        }
        
        if (resultados.length === 0) {
            const sugerencias = sugerirBusquedas(origin, destination);
            let html = `
                <article class="route-card">
                    <h3>No se encontraron rutas directas</h3>
                    <p>Intenta con estos ajustes:</p>
                    <ul>
                        <li>Usa nombres más específicos de lugares</li>
                        <li>Verifica la ortografía</li>
                        <li>Busca por puntos de referencia conocidos</li>
                    </ul>
            `;
            
            if (sugerencias.length > 0) {
                html += `<p><strong>Sugerencias:</strong></p><ul>`;
                sugerencias.forEach(sug => {
                    html += `<li>${sug}</li>`;
                });
                html += `</ul>`;
            }
            
            html += `</article>`;
            resultsContainer.innerHTML = html;
            return;
        }
        
        let html = `
            <div class="search-summary">
                <p>Se encontraron <strong>${resultados.length}</strong> rutas para tu búsqueda:</p>
                <p><strong>Origen:</strong> ${origin || 'No especificado'} | <strong>Destino:</strong> ${destination || 'No especificado'}</p>
            </div>
        `;
        
        resultados.forEach(ruta => {
            html += crearTarjetaRuta(ruta);
        });
        
        resultsContainer.innerHTML = html;
    }, 800);
}

// Mostrar detalles de ruta (actualizada)
function showRouteDetails(routeId) {
    const ruta = rutasIbagué.find(r => r.id === routeId);
    if (!ruta) return;
    previousScreen = document.querySelector('.screen.active').id;
    document.getElementById('route-details-title').innerHTML = `<i class="fas fa-route"></i> ${ruta.nombre}`;
    const esFav = esRutaFavorita(routeId);
    const favoriteBtn = document.getElementById('route-favorite-btn');
    favoriteBtn.innerHTML = esFav ? 
        '<i class="fas fa-heart"></i> Quitar de Favoritos' : 
        '<i class="far fa-heart"></i> Agregar a Favoritos';
    favoriteBtn.className = esFav ? 'favorite-btn favorited' : 'favorite-btn';
    favoriteBtn.style.display = 'block';
    favoriteBtn.onclick = function() { toggleFavorite(routeId); showRouteDetails(routeId); };
    const detailsContent = document.getElementById('route-details-content');
    detailsContent.innerHTML = `
        <section class="route-detail-header">
            <h1 class="route-detail-name">${ruta.nombre}</h1>
            <span class="route-detail-direction">Dirección: ${ruta.direccion}</span>
            ${esFav ? '<span class="favorite-badge" style="margin-left: 10px;">TU FAVORITA</span>' : ''}
        </section>
        <section class="real-time-info">
            <h4><i class="fas fa-clock"></i> TIEMPO REAL</h4>
            <div class="next-bus-time">Próximo bus: ${ruta.tiempoReal.siguienteBus}</div>
            <div class="bus-info">${ruta.tiempoReal.busesActivos} buses activos • Estado: ${ruta.tiempoReal.estado}</div>
        </section>
        <section class="route-info-grid">
            <article class="info-card-detail">
                <i class="fas fa-clock"></i>
                <h4>HORARIO</h4>
                <p>${ruta.horario}</p>
            </article>
            <article class="info-card-detail">
                <i class="fas fa-sync-alt"></i>
                <h4>FRECUENCIA</h4>
                <p>${ruta.frecuencia}</p>
            </article>
            <article class="info-card-detail">
                <i class="fas fa-hourglass-half"></i>
                <h4>DURACIÓN</h4>
                <p>${ruta.duracion}</p>
            </article>
            <article class="info-card-detail">
                <i class="fas fa-money-bill-wave"></i>
                <h4>TARIFA NORMAL</h4>
                <p>${ruta.tarifa.normal}</p>
                <small>Lunes a Sábado</small>
            </article>
        </section>
        <section class="tarifa-info">
            <h3 class="timeline-title">
                <i class="fas fa-money-bill-wave"></i>
                INFORMACIÓN DE TARIFAS
            </h3>
            <div class="tarifa-details">
                <div class="tarifa-item">
                    <span class="tarifa-dias">Lunes a Sábado:</span>
                    <span class="tarifa-precio">${ruta.tarifa.normal}</span>
                </div>
                <div class="tarifa-item">
                    <span class="tarifa-dias">Domingos y Festivos:</span>
                    <span class="tarifa-precio">${ruta.tarifa.domingoFestivo}</span>
                </div>
            </div>
        </section>
        <section class="route-timeline">
            <h3 class="timeline-title">
                <i class="fas fa-map-marked-alt"></i>
                RECORRIDO COMPLETO - ${ruta.paradas.length} PARADAS
            </h3>
            <div class="timeline-container">
                <div class="timeline-line"></div>
                ${ruta.paradas.map((parada, index) => `
                    <div class="timeline-stop">
                        <div class="stop-name">${parada}</div>
                        <div class="stop-details">Parada ${index + 1}</div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    showScreen('route-details');
}

// Cargar rutas frecuentes (actualizada)
function loadFrequentRoutes() {
    const container = document.getElementById('frequent-routes');
    let html = '';
    rutasFrecuentes.forEach(id => {
        const ruta = rutasIbagué.find(r => r.id === id);
        if (ruta) {
            html += crearTarjetaRuta(ruta);
        }
    });
    container.innerHTML = html;
}

// =============================================
// FUNCIONES DE MAPA Y NAVEGACIÓN
// =============================================

function setupNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showScreen(targetTab);
            previousScreen = targetTab;
            if (targetTab === 'map' && !map) {
                setTimeout(initializeMap, 100);
            }
        });
    });
}

function setupHomeButtons() {
    const mainButtons = document.querySelectorAll('.main-button');
    mainButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const targetTab = document.querySelector(`.nav-tab[data-tab="${action}"]`);
            if (targetTab) {
                targetTab.click();
            }
        });
    });
}

function setupSearch() {
    const searchButton = document.getElementById('search-routes');
    const originInput = document.getElementById('origin-input');
    const destinationInput = document.getElementById('destination-input');
    
    // Búsqueda al hacer clic
    searchButton.addEventListener('click', function() {
        const origin = originInput.value;
        const destination = destinationInput.value;
        
        if (!origin && !destination) {
            alert('Por favor, ingresa al menos un origen o destino');
            return;
        }
        
        searchRoutes(origin, destination);
    });
    
    // Búsqueda al presionar Enter en cualquier campo
    [originInput, destinationInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    });
    
    // Sugerencias en tiempo real (opcional)
    originInput.addEventListener('input', function() {
        if (this.value.length > 2) {
            mostrarSugerencias(this.value, 'origin');
        }
    });
    
    destinationInput.addEventListener('input', function() {
        if (this.value.length > 2) {
            mostrarSugerencias(this.value, 'destination');
        }
    });
}

// Función para mostrar sugerencias en tiempo real
function mostrarSugerencias(texto, tipo) {
    // Esta función podría implementar un dropdown con sugerencias
    // Por ahora es un esqueleto para futura implementación
    console.log(`Buscando sugerencias para ${tipo}: ${texto}`);
}

function setupBackButton() {
    const backButton = document.getElementById('back-to-routes');
    backButton.addEventListener('click', function() {
        showScreen(previousScreen);
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === previousScreen) {
                tab.classList.add('active');
            }
        });
    });
}

function setupMapNavigation() {
    const mapControls = document.querySelectorAll('.map-control-btn');
    mapControls.forEach(control => {
        control.addEventListener('click', function() {
            mapControls.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const routeFilter = this.getAttribute('data-route');
            filterMapRoutes(routeFilter);
        });
    });
}

function initializeMap() {
    const ibagueCoords = [4.444, -75.244];
    map = L.map('map-container').setView(ibagueCoords, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    drawRoutesOnMap();
}

function drawRoutesOnMap() {
    rutasIbagué.forEach(ruta => {
        const routeLayer = L.layerGroup();
        const routeLine = L.polyline(ruta.coordenadas, {
            color: ruta.color,
            weight: 6,
            opacity: 0.8,
            smoothFactor: 1,
            lineCap: 'round',
            lineJoin: 'round'
        }).addTo(routeLayer);
        ruta.coordenadas.forEach((coords, index) => {
            if (index % 5 === 0) {
                const stopMarker = L.circleMarker(coords, {
                    color: '#FF6B6B',
                    fillColor: '#FF6B6B',
                    fillOpacity: 0.9,
                    radius: 6,
                    weight: 2
                }).addTo(routeLayer);
                stopMarker.bindPopup(`
                    <div class="map-popup">
                        <h3>${ruta.nombre}</h3>
                        <p><strong>📍 Parada ${index + 1}</strong></p>
                        <p>${ruta.paradas[index] || 'Parada principal'}</p>
                        <p><strong>🚌 Dirección:</strong> ${ruta.direccion}</p>
                        <p><strong>⏱️ Frecuencia:</strong> ${ruta.frecuencia}</p>
                        <p><strong>💰 Tarifa:</strong> ${ruta.tarifa.descripcion}</p>
                        <button onclick="showRouteDetails(${ruta.id})" class="popup-btn">
                            <i class="fas fa-info-circle"></i> Ver Detalles Completos
                        </button>
                    </div>
                `);
            }
        });
        simulateBusesOnRoute(ruta, routeLayer);
        routeLayers[ruta.id] = routeLayer;
        routeLayer.addTo(map);
    });
}

function simulateBusesOnRoute(ruta, routeLayer) {
    for (let i = 0; i < ruta.tiempoReal.busesActivos; i++) {
        const randomCoord = ruta.coordenadas[Math.floor(Math.random() * ruta.coordenadas.length)];
        const busMarker = L.circleMarker(randomCoord, {
            color: ruta.color,
            fillColor: ruta.color,
            fillOpacity: 1,
            radius: 8
        }).addTo(routeLayer);
        busMarker.bindPopup(`
            <div class="map-popup">
                <h3>🚌 Bus ${i + 1}</h3>
                <p><strong>Ruta:</strong> ${ruta.nombre}</p>
                <p><strong>Estado:</strong> En movimiento</p>
                <p><strong>Próxima parada:</strong> ${ruta.paradas[Math.floor(Math.random() * ruta.paradas.length)]}</p>
            </div>
        `);
    }
}

function filterMapRoutes(routeFilter) {
    currentRouteFilter = routeFilter;
    Object.values(routeLayers).forEach(layer => {
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
        }
    });
    if (routeFilter === 'all') {
        Object.values(routeLayers).forEach(layer => {
            map.addLayer(layer);
        });
        const allCoords = rutasIbagué.flatMap(ruta => ruta.coordenadas);
        if (allCoords.length > 0) {
            const group = new L.featureGroup(allCoords.map(coord => L.marker(coord)));
            map.fitBounds(group.getBounds().pad(0.1));
        }
    } else {
        const routeId = parseInt(routeFilter);
        if (routeLayers[routeId]) {
            map.addLayer(routeLayers[routeId]);
            const ruta = rutasIbagué.find(r => r.id === routeId);
            if (ruta && ruta.coordenadas.length > 0) {
                const group = new L.featureGroup(ruta.coordenadas.map(coord => L.marker(coord)));
                map.fitBounds(group.getBounds().pad(0.1));
            }
        }
    }
}

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Simular actualizaciones en tiempo real
setInterval(function() {
    console.log("Sistema usuario-ruta activo. Usuarios:", usuarios.length, "Favoritos:", usuarioRutaFavorita.length);
}, 30000);