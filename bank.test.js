jest.mock('./bankDAO', () => ({
  retrieveBalance: jest.fn(),
  debitAccount: jest.fn()
}));

jest.mock('./bankTransfer', () => ({
  transfer: jest.fn()
}));

const bankDAO = require('./bankDAO');
const { transfer } = require('./bankTransfer');
const bank = require('./bank');

test("getBalance appelle retrieveBalance sans l'exécuter", () => {
    bank.getBalance('XYZ987');

    expect(bankDAO.retrieveBalance).toHaveBeenCalled();
});

test("getBalance transmet accountId à retrieveBalance", () => {
    bank.getBalance('XYZ987');

    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith('XYZ987');
});

test("getBalance retourne le solde", () => {
    bankDAO.retrieveBalance.mockReturnValue(2500);
    const result = bank.getBalance('XYZ987');

    expect(result).toBe(2500);
});

test("transferMoney appelle transfer avec accountId et amount", () => {
    bank.transferMoney('XYZ987', 500);

    expect(transfer).toHaveBeenCalled();
    expect(transfer).toHaveBeenCalledWith('XYZ987', 500);
});
