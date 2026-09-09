export type InventoryBatchesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesBatchStateMachine {
  private allowedTransitions: Record<InventoryBatchesBatchState, InventoryBatchesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesBatchState, to: InventoryBatchesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesBatchState, to: InventoryBatchesBatchState): InventoryBatchesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
