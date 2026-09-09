export type FinanceExpensesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesAssignmentStateMachine {
  private allowedTransitions: Record<FinanceExpensesAssignmentState, FinanceExpensesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesAssignmentState, to: FinanceExpensesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesAssignmentState, to: FinanceExpensesAssignmentState): FinanceExpensesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
