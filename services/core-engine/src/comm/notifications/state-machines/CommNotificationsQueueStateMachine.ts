export type CommNotificationsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsQueueStateMachine {
  private allowedTransitions: Record<CommNotificationsQueueState, CommNotificationsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsQueueState, to: CommNotificationsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsQueueState, to: CommNotificationsQueueState): CommNotificationsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
