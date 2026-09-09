export type CommPresenceSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceSnapshotStateMachine {
  private allowedTransitions: Record<CommPresenceSnapshotState, CommPresenceSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceSnapshotState, to: CommPresenceSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceSnapshotState, to: CommPresenceSnapshotState): CommPresenceSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
