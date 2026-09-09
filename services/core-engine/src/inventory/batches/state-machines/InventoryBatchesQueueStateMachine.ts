export type InventoryBatchesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesQueueStateMachine {
  private allowedTransitions: Record<InventoryBatchesQueueState, InventoryBatchesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesQueueState, to: InventoryBatchesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesQueueState, to: InventoryBatchesQueueState): InventoryBatchesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
