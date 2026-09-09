export type FinanceExpensesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesNodeStateMachine {
  private allowedTransitions: Record<FinanceExpensesNodeState, FinanceExpensesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesNodeState, to: FinanceExpensesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesNodeState, to: FinanceExpensesNodeState): FinanceExpensesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesNode: " + from + " -> " + to);
    }
    return to;
  }
}
