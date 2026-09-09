export type AbacAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacAssignmentStateMachine {
  private allowedTransitions: Record<AbacAssignmentState, AbacAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacAssignmentState, to: AbacAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacAssignmentState, to: AbacAssignmentState): AbacAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
