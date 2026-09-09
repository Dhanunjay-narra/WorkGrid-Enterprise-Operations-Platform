export type FinanceExpensesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesEntryStateMachine {
  private allowedTransitions: Record<FinanceExpensesEntryState, FinanceExpensesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesEntryState, to: FinanceExpensesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesEntryState, to: FinanceExpensesEntryState): FinanceExpensesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
