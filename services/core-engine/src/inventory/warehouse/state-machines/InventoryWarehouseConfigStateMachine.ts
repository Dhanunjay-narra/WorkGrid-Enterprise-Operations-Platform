export type InventoryWarehouseConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryWarehouseConfigStateMachine {
  private allowedTransitions: Record<InventoryWarehouseConfigState, InventoryWarehouseConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryWarehouseConfigState, to: InventoryWarehouseConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryWarehouseConfigState, to: InventoryWarehouseConfigState): InventoryWarehouseConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryWarehouseConfig: " + from + " -> " + to);
    }
    return to;
  }
}
