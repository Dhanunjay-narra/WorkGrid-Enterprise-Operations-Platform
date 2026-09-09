export type InventoryStockEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockEventStateMachine {
  private allowedTransitions: Record<InventoryStockEventState, InventoryStockEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockEventState, to: InventoryStockEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockEventState, to: InventoryStockEventState): InventoryStockEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockEvent: " + from + " -> " + to);
    }
    return to;
  }
}
