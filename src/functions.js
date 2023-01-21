/*
    Function that calculates the debt accrued on student loans until graduation date. Takes in the initial loan amount, the interest rate on it and how many
    months the interest will be applied. This is assuming interest is compounded monthly.
*/
export function debtGrowth(initialSum, debtInterestRate, months) {
    return initialSum*(Math.pow(1+debtInterestRate, months));
}

/*
    Function that calculates the year the debt will be paid off assuming a set repayment value. Takes in the intial debt amount, the interest rate on the debt,
    and how much money is used to repay the debt monthly (make sure this is monthly and not annual). This is assuming interest is compounded monthly.
*/
export function yearDebtFree(debtAmount, debtInterest, debtRepayment) {
    return Math.ceil((-Math.log(1 - (debtAmount*debtInterest/debtRepayment))/Math.log(1 + debtInterest))/12);
}

/*
    Function that calculates how much money
*/
export function compoundInterest(years, interestRate, startCapital, contributeCapital, annually) {
    discountRate = interestRate/(1+interestRate)
    return (startCapital + (contributeCapital/discountRate) * Math.pow(1 + interestRate, years)) - contributeCapital/discountRate;
}

/*
    Function that calculates how much money can be used yearly in retirement using the ammount provided.
*/
export function yearlyLivingBudget() {
    return 
}

/*
    Calculates the amount of money given at retirement, given a set of initial variables.
*/
export function reCalculate(age, retirementAge, expectancyAge, currentSavings, debt, debtInterest, gradDate, income, retirementAge, endSavings) {

    /*
    Find life expendency/expected age of retirement
    Then calculate using current savings + debt how much current capital
    If debt how long to pay off with salary
    once debt free start calculating compound interest calculation with monthly savings added
    */

    const workingYears = retirementAge - age;
    const retirementYears = expectancyAge - retirementAge;
    const currentDate = new Date();
    months = (gradDate.getFullYear() - currentDate.getFullYear()) * 12;
    months -= currentDate.getMonth() + 1;
    months += gradDate.getMonth();
    const monthsUntilGrad = 0 ? 0 : months;

    // Calcualting the debt by the end of education
    futureDebt = debtGrowth(debt, debtInterest, monthsUntilGrad);

    // Assuming a debt repayment of 10% of income
    savings = 0.1*income;
    debtRepayment = 0.1*(income/12); // This is calculated to be taken out monthly

    // Will get the year that the user will be debt free assuming a constant repayment.
    debtFree = yearDebtFree(futureDebt, debtInterest, debtRepayment);
    // Will get the amount of money accrued by the end of paying off the debt.
    yearsWithDebt = currentDate.getFullYear+debtFree;
    sumAfterDebt = compoundInterest(yearsWithDebt, interestRate, currentSavings, savings, true);
    // Gets the final lump sum at the projected retirement age.
    yearsToRetirement = workingYears - yearsWithDebt;
    sumAtRetirement = compoundInterest(yearsToRetirement, interestRate, sumAfterDebt, savings+(12*debtRepayment), true);

    /*var result = {
        totalMoney: sumAtRetirement
    }*/

    return sumAtRetirement;
}

//export default {compoundInterest}
