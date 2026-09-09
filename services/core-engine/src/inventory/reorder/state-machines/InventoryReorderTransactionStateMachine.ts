export type InventoryReorderTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderTransactionStateMachine {
  private allowedTransitions: Record<InventoryReorderTransactionState, InventoryReorderTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderTransactionState, to: InventoryReorderTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderTransactionState, to: InventoryReorderTransactionState): InventoryReorderTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
