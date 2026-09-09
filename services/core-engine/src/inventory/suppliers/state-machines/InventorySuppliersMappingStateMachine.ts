export type InventorySuppliersMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersMappingStateMachine {
  private allowedTransitions: Record<InventorySuppliersMappingState, InventorySuppliersMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersMappingState, to: InventorySuppliersMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersMappingState, to: InventorySuppliersMappingState): InventorySuppliersMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersMapping: " + from + " -> " + to);
    }
    return to;
  }
}
