export type SecurityAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityAssignmentStateMachine {
  private allowedTransitions: Record<SecurityAssignmentState, SecurityAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityAssignmentState, to: SecurityAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityAssignmentState, to: SecurityAssignmentState): SecurityAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
