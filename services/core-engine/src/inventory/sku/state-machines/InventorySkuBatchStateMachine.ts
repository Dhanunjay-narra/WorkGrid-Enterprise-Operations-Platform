export type InventorySkuBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuBatchStateMachine {
  private allowedTransitions: Record<InventorySkuBatchState, InventorySkuBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuBatchState, to: InventorySkuBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuBatchState, to: InventorySkuBatchState): InventorySkuBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuBatch: " + from + " -> " + to);
    }
    return to;
  }
}
