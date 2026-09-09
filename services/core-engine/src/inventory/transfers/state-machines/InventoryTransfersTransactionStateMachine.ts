export type InventoryTransfersTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersTransactionStateMachine {
  private allowedTransitions: Record<InventoryTransfersTransactionState, InventoryTransfersTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersTransactionState, to: InventoryTransfersTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersTransactionState, to: InventoryTransfersTransactionState): InventoryTransfersTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
