export type RbacAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacAssignmentStateMachine {
  private allowedTransitions: Record<RbacAssignmentState, RbacAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacAssignmentState, to: RbacAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacAssignmentState, to: RbacAssignmentState): RbacAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
