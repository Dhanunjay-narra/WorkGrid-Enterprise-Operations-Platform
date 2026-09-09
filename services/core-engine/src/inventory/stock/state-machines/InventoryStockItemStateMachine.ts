export type InventoryStockItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockItemStateMachine {
  private allowedTransitions: Record<InventoryStockItemState, InventoryStockItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockItemState, to: InventoryStockItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockItemState, to: InventoryStockItemState): InventoryStockItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockItem: " + from + " -> " + to);
    }
    return to;
  }
}
