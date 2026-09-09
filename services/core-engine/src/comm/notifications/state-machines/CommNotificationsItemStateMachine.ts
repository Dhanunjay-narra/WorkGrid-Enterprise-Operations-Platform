export type CommNotificationsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsItemStateMachine {
  private allowedTransitions: Record<CommNotificationsItemState, CommNotificationsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsItemState, to: CommNotificationsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsItemState, to: CommNotificationsItemState): CommNotificationsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsItem: " + from + " -> " + to);
    }
    return to;
  }
}
