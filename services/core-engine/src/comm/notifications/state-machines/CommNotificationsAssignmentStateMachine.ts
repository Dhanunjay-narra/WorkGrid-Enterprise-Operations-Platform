export type CommNotificationsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsAssignmentStateMachine {
  private allowedTransitions: Record<CommNotificationsAssignmentState, CommNotificationsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsAssignmentState, to: CommNotificationsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsAssignmentState, to: CommNotificationsAssignmentState): CommNotificationsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
