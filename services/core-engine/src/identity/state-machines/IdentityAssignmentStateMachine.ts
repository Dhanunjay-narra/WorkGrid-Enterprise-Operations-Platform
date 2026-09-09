export type IdentityAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityAssignmentStateMachine {
  private allowedTransitions: Record<IdentityAssignmentState, IdentityAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityAssignmentState, to: IdentityAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityAssignmentState, to: IdentityAssignmentState): IdentityAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
