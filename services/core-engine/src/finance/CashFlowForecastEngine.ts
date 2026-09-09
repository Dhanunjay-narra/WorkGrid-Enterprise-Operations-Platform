export interface CashFlowPeriod {
  periodMonth: string;
  expectedReceivables: number;
  expectedPayables: number;
  operatingExpenses: number;
  capitalExpenditures: number;
}

export class CashFlowForecastEngine {
  public projectNetCashFlow(startingCash: number, periods: CashFlowPeriod[]): { period: string; netInflow: number; endingCash: number }[] {
    let currentCash = startingCash;
    const results: { period: string; netInflow: number; endingCash: number }[] = [];

    for (const p of periods) {
      const inflows = p.expectedReceivables;
      const outflows = p.expectedPayables + p.operatingExpenses + p.capitalExpenditures;
      const netInflow = inflows - outflows;
      currentCash += netInflow;

      results.push({
        period: p.periodMonth,
        netInflow,
        endingCash: currentCash
      });
    }

    return results;
  }
}
