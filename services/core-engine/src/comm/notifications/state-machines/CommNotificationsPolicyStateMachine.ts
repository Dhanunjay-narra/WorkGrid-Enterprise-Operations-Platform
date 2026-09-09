export type CommNotificationsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsPolicyStateMachine {
  private allowedTransitions: Record<CommNotificationsPolicyState, CommNotificationsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsPolicyState, to: CommNotificationsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsPolicyState, to: CommNotificationsPolicyState): CommNotificationsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
