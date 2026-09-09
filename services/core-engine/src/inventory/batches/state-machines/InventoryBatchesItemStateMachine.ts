export type InventoryBatchesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesItemStateMachine {
  private allowedTransitions: Record<InventoryBatchesItemState, InventoryBatchesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesItemState, to: InventoryBatchesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesItemState, to: InventoryBatchesItemState): InventoryBatchesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesItem: " + from + " -> " + to);
    }
    return to;
  }
}
