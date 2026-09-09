export type InventoryStockConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockConfigStateMachine {
  private allowedTransitions: Record<InventoryStockConfigState, InventoryStockConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockConfigState, to: InventoryStockConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockConfigState, to: InventoryStockConfigState): InventoryStockConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockConfig: " + from + " -> " + to);
    }
    return to;
  }
}
