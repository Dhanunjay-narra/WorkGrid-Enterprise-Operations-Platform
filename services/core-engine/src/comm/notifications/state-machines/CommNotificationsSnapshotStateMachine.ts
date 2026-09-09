export type CommNotificationsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsSnapshotStateMachine {
  private allowedTransitions: Record<CommNotificationsSnapshotState, CommNotificationsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsSnapshotState, to: CommNotificationsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsSnapshotState, to: CommNotificationsSnapshotState): CommNotificationsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
