export type InventoryOrdersTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersTransactionStateMachine {
  private allowedTransitions: Record<InventoryOrdersTransactionState, InventoryOrdersTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersTransactionState, to: InventoryOrdersTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersTransactionState, to: InventoryOrdersTransactionState): InventoryOrdersTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
