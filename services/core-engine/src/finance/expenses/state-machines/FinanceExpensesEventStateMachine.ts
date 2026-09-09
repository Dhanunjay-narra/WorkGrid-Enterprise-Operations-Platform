export type FinanceExpensesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesEventStateMachine {
  private allowedTransitions: Record<FinanceExpensesEventState, FinanceExpensesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesEventState, to: FinanceExpensesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesEventState, to: FinanceExpensesEventState): FinanceExpensesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
