export type FinanceInvoicesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceInvoicesAssignmentStateMachine {
  private allowedTransitions: Record<FinanceInvoicesAssignmentState, FinanceInvoicesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceInvoicesAssignmentState, to: FinanceInvoicesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceInvoicesAssignmentState, to: FinanceInvoicesAssignmentState): FinanceInvoicesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceInvoicesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
