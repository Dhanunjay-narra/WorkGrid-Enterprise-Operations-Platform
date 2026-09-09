export type InventorySuppliersPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersPolicyStateMachine {
  private allowedTransitions: Record<InventorySuppliersPolicyState, InventorySuppliersPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersPolicyState, to: InventorySuppliersPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersPolicyState, to: InventorySuppliersPolicyState): InventorySuppliersPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
