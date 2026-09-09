export type InventoryBatchesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesThresholdStateMachine {
  private allowedTransitions: Record<InventoryBatchesThresholdState, InventoryBatchesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesThresholdState, to: InventoryBatchesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesThresholdState, to: InventoryBatchesThresholdState): InventoryBatchesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
