export type FinanceExpensesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesMetricStateMachine {
  private allowedTransitions: Record<FinanceExpensesMetricState, FinanceExpensesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesMetricState, to: FinanceExpensesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesMetricState, to: FinanceExpensesMetricState): FinanceExpensesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
