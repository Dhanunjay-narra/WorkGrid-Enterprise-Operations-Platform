export type FinanceExpensesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesRecordStateMachine {
  private allowedTransitions: Record<FinanceExpensesRecordState, FinanceExpensesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesRecordState, to: FinanceExpensesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesRecordState, to: FinanceExpensesRecordState): FinanceExpensesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
