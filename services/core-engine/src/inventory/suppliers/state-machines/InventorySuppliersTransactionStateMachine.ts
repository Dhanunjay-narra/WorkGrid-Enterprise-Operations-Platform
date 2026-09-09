export type InventorySuppliersTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersTransactionStateMachine {
  private allowedTransitions: Record<InventorySuppliersTransactionState, InventorySuppliersTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersTransactionState, to: InventorySuppliersTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersTransactionState, to: InventorySuppliersTransactionState): InventorySuppliersTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
