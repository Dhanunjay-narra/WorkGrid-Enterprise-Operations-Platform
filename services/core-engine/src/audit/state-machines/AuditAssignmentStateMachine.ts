export type AuditAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditAssignmentStateMachine {
  private allowedTransitions: Record<AuditAssignmentState, AuditAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditAssignmentState, to: AuditAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditAssignmentState, to: AuditAssignmentState): AuditAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
