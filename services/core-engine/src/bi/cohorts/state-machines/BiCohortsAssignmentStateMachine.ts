export type BiCohortsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsAssignmentStateMachine {
  private allowedTransitions: Record<BiCohortsAssignmentState, BiCohortsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsAssignmentState, to: BiCohortsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsAssignmentState, to: BiCohortsAssignmentState): BiCohortsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
