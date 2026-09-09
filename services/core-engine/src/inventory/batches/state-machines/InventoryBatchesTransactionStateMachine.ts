export type InventoryBatchesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesTransactionStateMachine {
  private allowedTransitions: Record<InventoryBatchesTransactionState, InventoryBatchesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesTransactionState, to: InventoryBatchesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesTransactionState, to: InventoryBatchesTransactionState): InventoryBatchesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
