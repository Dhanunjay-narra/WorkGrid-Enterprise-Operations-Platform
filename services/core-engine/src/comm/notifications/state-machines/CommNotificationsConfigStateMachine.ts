export type CommNotificationsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsConfigStateMachine {
  private allowedTransitions: Record<CommNotificationsConfigState, CommNotificationsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsConfigState, to: CommNotificationsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsConfigState, to: CommNotificationsConfigState): CommNotificationsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
