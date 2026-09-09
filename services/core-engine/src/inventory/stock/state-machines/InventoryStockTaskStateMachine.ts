export type InventoryStockTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockTaskStateMachine {
  private allowedTransitions: Record<InventoryStockTaskState, InventoryStockTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockTaskState, to: InventoryStockTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockTaskState, to: InventoryStockTaskState): InventoryStockTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockTask: " + from + " -> " + to);
    }
    return to;
  }
}
