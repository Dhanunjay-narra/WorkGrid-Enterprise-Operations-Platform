export type IntSyncSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncSnapshotStateMachine {
  private allowedTransitions: Record<IntSyncSnapshotState, IntSyncSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncSnapshotState, to: IntSyncSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncSnapshotState, to: IntSyncSnapshotState): IntSyncSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
