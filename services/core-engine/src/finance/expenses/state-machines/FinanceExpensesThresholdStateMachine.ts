export type FinanceExpensesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesThresholdStateMachine {
  private allowedTransitions: Record<FinanceExpensesThresholdState, FinanceExpensesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesThresholdState, to: FinanceExpensesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesThresholdState, to: FinanceExpensesThresholdState): FinanceExpensesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
