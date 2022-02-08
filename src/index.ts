/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import e from "cors";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	const nome1: string = 'UbuntuSilva';
	const idade1: number = 33;
	const peso1: number = 88.50;
	const altura1: number = 1.65;
	const ehDev1: boolean= true;

	const nome2: string = 'UbuntuSilva';
	const idade2: number = 30;
	const peso2: number = 75.00;
	const altura2: number = 1.75;
	const ehDev2: boolean= true;

	const nome3: string = 'UbuntuMachado';
	const idade3: number = 22;
	const peso3: number = 90.00;
	const altura3: number = 1.75;
	const ehDev3: boolean= false;
	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	console.log("=== Soma das idades ===")
	console.log(idade1+idade2+idade3)

	console.log("=== Agrupamento de nomes ===")
	console.table([nome1,nome2,nome3])

	console.log("=== IMC Ubuntu Silva1  ===")
	console.log(peso1 / (altura1 * altura1))
	console.log("=== IMC Ubuntu Silva2  ===")
	console.log(peso2 / (altura2 * altura2))
	console.log("=== IMC Ubuntu Machado  ===")
	console.log(peso3 / (altura3 * altura3))

	console.log("=== Quantidade de devs ===")
	console.table([ehDev1, ehDev2, ehDev3])

	if(nome1 && nome2 == 'UbuntuSilva'){
		console.log("=== Temos 2 silvas na lista ===")
		console.table([nome1, nome2])
	}
	
});
