export type InventoryStockStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockStateStateMachine {
  private allowedTransitions: Record<InventoryStockStateState, InventoryStockStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockStateState, to: InventoryStockStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockStateState, to: InventoryStockStateState): InventoryStockStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockState: " + from + " -> " + to);
    }
    return to;
  }
}
