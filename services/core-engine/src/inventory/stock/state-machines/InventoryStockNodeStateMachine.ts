export type InventoryStockNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockNodeStateMachine {
  private allowedTransitions: Record<InventoryStockNodeState, InventoryStockNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockNodeState, to: InventoryStockNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockNodeState, to: InventoryStockNodeState): InventoryStockNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockNode: " + from + " -> " + to);
    }
    return to;
  }
}
