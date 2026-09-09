export type IntSyncAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncAssignmentStateMachine {
  private allowedTransitions: Record<IntSyncAssignmentState, IntSyncAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncAssignmentState, to: IntSyncAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncAssignmentState, to: IntSyncAssignmentState): IntSyncAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
