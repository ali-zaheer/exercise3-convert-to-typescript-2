import {
	DarkChocolateMocha,
	Mocha,
	PeppermintMocha,
	WhiteChocolateMocha
} from '../main';

describe('Mocha classes from main.ts', () => {
	it('creates default mocha with expected values', () => {
		const mocha = new Mocha();

		expect(mocha.milk).toBe(1);
		expect(mocha.shot).toBe(1);
		expect(mocha.chocolateType).toBe('dark');
	});

	it('assigns chocolate type for each derived mocha', () => {
		const whiteMocha = new WhiteChocolateMocha();
		const darkMocha = new DarkChocolateMocha();

		expect(whiteMocha.chocolateType).toBe('White');
		expect(darkMocha.chocolateType).toBe('Dark');
	});

	it('logs peppermint ingredients including syrup amount', () => {
		const peppermintMocha = new PeppermintMocha();
		peppermintMocha.milk = 2;
		peppermintMocha.shot = 3;
		peppermintMocha.peppermintSyrup = 4;

		spyOn(console, 'log');
		peppermintMocha.prepare();

		expect(console.log).toHaveBeenCalledWith('Your Peppermint Mocha Ingredients:');
		expect(console.log).toHaveBeenCalledWith('Pumps of peppermint: ', 4, '\n\n');
	});
});
