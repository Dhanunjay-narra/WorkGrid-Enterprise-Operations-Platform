export type InventoryStockSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockSnapshotStateMachine {
  private allowedTransitions: Record<InventoryStockSnapshotState, InventoryStockSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockSnapshotState, to: InventoryStockSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockSnapshotState, to: InventoryStockSnapshotState): InventoryStockSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
