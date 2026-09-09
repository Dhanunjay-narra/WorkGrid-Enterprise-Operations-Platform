export interface CompensationStructure {
  baseSalary: number;
  allowances: number;
  bonus: number;
  taxRatePercent: number;
  retirementContributionPercent: number;
  healthInsuranceDeduction: number;
}

export interface PayrollResult {
  grossPay: number;
  taxDeduction: number;
  retirementDeduction: number;
  totalDeductions: number;
  netPay: number;
}

export class PayrollCalculator {
  public computeMonthlyPayroll(comp: CompensationStructure): PayrollResult {
    const grossPay = comp.baseSalary + comp.allowances + comp.bonus;
    const taxDeduction = (grossPay * comp.taxRatePercent) / 100;
    const retirementDeduction = (comp.baseSalary * comp.retirementContributionPercent) / 100;
    const totalDeductions = taxDeduction + retirementDeduction + comp.healthInsuranceDeduction;
    const netPay = Math.max(0, grossPay - totalDeductions);

    return {
      grossPay,
      taxDeduction,
      retirementDeduction,
      totalDeductions,
      netPay
    };
  }
}
