export type InventoryStockBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockBatchStateMachine {
  private allowedTransitions: Record<InventoryStockBatchState, InventoryStockBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockBatchState, to: InventoryStockBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockBatchState, to: InventoryStockBatchState): InventoryStockBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockBatch: " + from + " -> " + to);
    }
    return to;
  }
}
