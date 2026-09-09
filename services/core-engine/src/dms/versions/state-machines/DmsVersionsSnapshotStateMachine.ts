export type DmsVersionsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsSnapshotStateMachine {
  private allowedTransitions: Record<DmsVersionsSnapshotState, DmsVersionsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsSnapshotState, to: DmsVersionsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsSnapshotState, to: DmsVersionsSnapshotState): DmsVersionsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
