export type InventoryBatchesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesNodeStateMachine {
  private allowedTransitions: Record<InventoryBatchesNodeState, InventoryBatchesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesNodeState, to: InventoryBatchesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesNodeState, to: InventoryBatchesNodeState): InventoryBatchesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesNode: " + from + " -> " + to);
    }
    return to;
  }
}
