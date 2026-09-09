export type InventorySkuTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuTransactionStateMachine {
  private allowedTransitions: Record<InventorySkuTransactionState, InventorySkuTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuTransactionState, to: InventorySkuTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuTransactionState, to: InventorySkuTransactionState): InventorySkuTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
