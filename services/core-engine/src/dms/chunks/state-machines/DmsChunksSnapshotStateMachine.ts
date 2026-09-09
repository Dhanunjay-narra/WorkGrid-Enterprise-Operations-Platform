export type DmsChunksSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksSnapshotStateMachine {
  private allowedTransitions: Record<DmsChunksSnapshotState, DmsChunksSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksSnapshotState, to: DmsChunksSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksSnapshotState, to: DmsChunksSnapshotState): DmsChunksSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
