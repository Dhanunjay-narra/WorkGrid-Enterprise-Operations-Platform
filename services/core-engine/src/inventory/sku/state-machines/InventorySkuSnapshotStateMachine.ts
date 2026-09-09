export type InventorySkuSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuSnapshotStateMachine {
  private allowedTransitions: Record<InventorySkuSnapshotState, InventorySkuSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuSnapshotState, to: InventorySkuSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuSnapshotState, to: InventorySkuSnapshotState): InventorySkuSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
