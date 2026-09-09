export type CommNotificationsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsEventStateMachine {
  private allowedTransitions: Record<CommNotificationsEventState, CommNotificationsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsEventState, to: CommNotificationsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsEventState, to: CommNotificationsEventState): CommNotificationsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
