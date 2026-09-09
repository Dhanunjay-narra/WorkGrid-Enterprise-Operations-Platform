export type InventoryOrdersSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersSnapshotStateMachine {
  private allowedTransitions: Record<InventoryOrdersSnapshotState, InventoryOrdersSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersSnapshotState, to: InventoryOrdersSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersSnapshotState, to: InventoryOrdersSnapshotState): InventoryOrdersSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
