jest.mock('./bankDAO', () => ({
  retrieveBalance: jest.fn()
}));

const bankDAO = require('./bankDAO');
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