import { inputWinningNumbers, inputBonusNumber } from './view/InputReader.js';
import { createWinningNumberValidator } from './validate/ValidatorCreator.js';

const winningNumberValidator = createWinningNumberValidator();

const splitWinningNumbers = (winningNumbers) => winningNumbers.split(',').map((number) => number.replaceAll(' ', ''));

const getWinningNumbers = async () => {
  const rawWinningNumbers = await inputWinningNumbers();
  winningNumberValidator.validateRawWinningNumber(rawWinningNumbers);

  const winningNumbers = splitWinningNumbers(rawWinningNumbers);
  winningNumberValidator.validateWinningNumbers(winningNumbers);

  return winningNumbers;
}

const getBonusNumber = async (winningNumbers) => {
  const bonusNumber = await inputBonusNumber();
  winningNumberValidator.validateBonusNumber(winningNumbers, bonusNumber);
  return bonusNumber;
}

export async function getWinningLottoNumbersAndBonusNumber() {
  const winningNumbers = await getWinningNumbers();
  const bonusNumber = await getBonusNumber(winningNumbers);

  return { winningNumbers, bonusNumber };
}