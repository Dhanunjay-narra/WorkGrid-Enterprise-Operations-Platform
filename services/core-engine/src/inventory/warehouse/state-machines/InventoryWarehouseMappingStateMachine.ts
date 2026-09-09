export type InventoryWarehouseMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryWarehouseMappingStateMachine {
  private allowedTransitions: Record<InventoryWarehouseMappingState, InventoryWarehouseMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryWarehouseMappingState, to: InventoryWarehouseMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryWarehouseMappingState, to: InventoryWarehouseMappingState): InventoryWarehouseMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryWarehouseMapping: " + from + " -> " + to);
    }
    return to;
  }
}
