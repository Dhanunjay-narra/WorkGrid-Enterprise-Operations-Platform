export type InventorySkuThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuThresholdStateMachine {
  private allowedTransitions: Record<InventorySkuThresholdState, InventorySkuThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuThresholdState, to: InventorySkuThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuThresholdState, to: InventorySkuThresholdState): InventorySkuThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
