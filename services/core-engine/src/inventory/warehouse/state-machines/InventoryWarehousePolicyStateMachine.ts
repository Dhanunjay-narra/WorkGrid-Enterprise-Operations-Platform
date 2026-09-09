export type InventoryWarehousePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryWarehousePolicyStateMachine {
  private allowedTransitions: Record<InventoryWarehousePolicyState, InventoryWarehousePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryWarehousePolicyState, to: InventoryWarehousePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryWarehousePolicyState, to: InventoryWarehousePolicyState): InventoryWarehousePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryWarehousePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
