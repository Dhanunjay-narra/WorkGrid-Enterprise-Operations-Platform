export type CommCallsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsAssignmentStateMachine {
  private allowedTransitions: Record<CommCallsAssignmentState, CommCallsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsAssignmentState, to: CommCallsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsAssignmentState, to: CommCallsAssignmentState): CommCallsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
