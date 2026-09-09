export type InventoryTransfersThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersThresholdStateMachine {
  private allowedTransitions: Record<InventoryTransfersThresholdState, InventoryTransfersThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersThresholdState, to: InventoryTransfersThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersThresholdState, to: InventoryTransfersThresholdState): InventoryTransfersThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
