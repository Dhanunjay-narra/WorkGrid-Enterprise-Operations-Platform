export type FinanceExpensesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesBatchStateMachine {
  private allowedTransitions: Record<FinanceExpensesBatchState, FinanceExpensesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesBatchState, to: FinanceExpensesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesBatchState, to: FinanceExpensesBatchState): FinanceExpensesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
