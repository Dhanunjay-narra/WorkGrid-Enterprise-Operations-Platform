export type InventoryStockThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockThresholdStateMachine {
  private allowedTransitions: Record<InventoryStockThresholdState, InventoryStockThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockThresholdState, to: InventoryStockThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockThresholdState, to: InventoryStockThresholdState): InventoryStockThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
