export type InventoryBatchesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesSnapshotStateMachine {
  private allowedTransitions: Record<InventoryBatchesSnapshotState, InventoryBatchesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesSnapshotState, to: InventoryBatchesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesSnapshotState, to: InventoryBatchesSnapshotState): InventoryBatchesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
