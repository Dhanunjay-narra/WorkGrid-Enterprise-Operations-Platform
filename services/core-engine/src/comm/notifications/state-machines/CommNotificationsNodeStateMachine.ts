export type CommNotificationsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsNodeStateMachine {
  private allowedTransitions: Record<CommNotificationsNodeState, CommNotificationsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsNodeState, to: CommNotificationsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsNodeState, to: CommNotificationsNodeState): CommNotificationsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsNode: " + from + " -> " + to);
    }
    return to;
  }
}
