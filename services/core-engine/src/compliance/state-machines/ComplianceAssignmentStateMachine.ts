export type ComplianceAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceAssignmentStateMachine {
  private allowedTransitions: Record<ComplianceAssignmentState, ComplianceAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceAssignmentState, to: ComplianceAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceAssignmentState, to: ComplianceAssignmentState): ComplianceAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
