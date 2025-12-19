jest.mock('./bankDAO', () => ({
  retrieveBalance: jest.fn()
}));

const bankDAO = require('./bankDAO');
const bank = require('./bank');

test('getBalance appelle retrieveBalance sans exécuter son implémentation', () => {
  bank.getBalance();

  expect(bankDAO.retrieveBalance).toHaveBeenCalled();
  expect(bankDAO.retrieveBalance).toHaveBeenCalledTimes(1);
});
