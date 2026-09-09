export type FinanceExpensesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesSnapshotStateMachine {
  private allowedTransitions: Record<FinanceExpensesSnapshotState, FinanceExpensesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesSnapshotState, to: FinanceExpensesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesSnapshotState, to: FinanceExpensesSnapshotState): FinanceExpensesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
