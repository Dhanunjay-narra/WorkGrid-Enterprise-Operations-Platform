export type FinanceExpensesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesStateStateMachine {
  private allowedTransitions: Record<FinanceExpensesStateState, FinanceExpensesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesStateState, to: FinanceExpensesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesStateState, to: FinanceExpensesStateState): FinanceExpensesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesState: " + from + " -> " + to);
    }
    return to;
  }
}
