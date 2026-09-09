export type CommNotificationsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsStateStateMachine {
  private allowedTransitions: Record<CommNotificationsStateState, CommNotificationsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsStateState, to: CommNotificationsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsStateState, to: CommNotificationsStateState): CommNotificationsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsState: " + from + " -> " + to);
    }
    return to;
  }
}
