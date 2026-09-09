export type CommNotificationsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsTaskStateMachine {
  private allowedTransitions: Record<CommNotificationsTaskState, CommNotificationsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsTaskState, to: CommNotificationsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsTaskState, to: CommNotificationsTaskState): CommNotificationsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsTask: " + from + " -> " + to);
    }
    return to;
  }
}
