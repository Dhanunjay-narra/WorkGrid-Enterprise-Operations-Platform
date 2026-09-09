export type InventoryStockQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockQueueStateMachine {
  private allowedTransitions: Record<InventoryStockQueueState, InventoryStockQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockQueueState, to: InventoryStockQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockQueueState, to: InventoryStockQueueState): InventoryStockQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockQueue: " + from + " -> " + to);
    }
    return to;
  }
}
