export type FinanceExpensesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesItemStateMachine {
  private allowedTransitions: Record<FinanceExpensesItemState, FinanceExpensesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesItemState, to: FinanceExpensesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesItemState, to: FinanceExpensesItemState): FinanceExpensesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesItem: " + from + " -> " + to);
    }
    return to;
  }
}
