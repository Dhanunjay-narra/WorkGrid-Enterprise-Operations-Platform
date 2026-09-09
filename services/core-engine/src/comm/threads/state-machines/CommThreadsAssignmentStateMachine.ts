export type CommThreadsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsAssignmentStateMachine {
  private allowedTransitions: Record<CommThreadsAssignmentState, CommThreadsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsAssignmentState, to: CommThreadsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsAssignmentState, to: CommThreadsAssignmentState): CommThreadsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
