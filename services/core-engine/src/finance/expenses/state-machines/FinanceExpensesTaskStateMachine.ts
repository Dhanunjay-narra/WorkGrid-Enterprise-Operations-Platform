export type FinanceExpensesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesTaskStateMachine {
  private allowedTransitions: Record<FinanceExpensesTaskState, FinanceExpensesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesTaskState, to: FinanceExpensesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesTaskState, to: FinanceExpensesTaskState): FinanceExpensesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesTask: " + from + " -> " + to);
    }
    return to;
  }
}
