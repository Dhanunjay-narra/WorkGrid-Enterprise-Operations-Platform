export type CrmAccountsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsAssignmentStateMachine {
  private allowedTransitions: Record<CrmAccountsAssignmentState, CrmAccountsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsAssignmentState, to: CrmAccountsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsAssignmentState, to: CrmAccountsAssignmentState): CrmAccountsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
