export type FinanceExpensesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesQueueStateMachine {
  private allowedTransitions: Record<FinanceExpensesQueueState, FinanceExpensesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesQueueState, to: FinanceExpensesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesQueueState, to: FinanceExpensesQueueState): FinanceExpensesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
