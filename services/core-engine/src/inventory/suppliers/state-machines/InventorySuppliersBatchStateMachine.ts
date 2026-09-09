export type InventorySuppliersBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersBatchStateMachine {
  private allowedTransitions: Record<InventorySuppliersBatchState, InventorySuppliersBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersBatchState, to: InventorySuppliersBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersBatchState, to: InventorySuppliersBatchState): InventorySuppliersBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersBatch: " + from + " -> " + to);
    }
    return to;
  }
}
