export type CommMessagesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesAssignmentStateMachine {
  private allowedTransitions: Record<CommMessagesAssignmentState, CommMessagesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesAssignmentState, to: CommMessagesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesAssignmentState, to: CommMessagesAssignmentState): CommMessagesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
