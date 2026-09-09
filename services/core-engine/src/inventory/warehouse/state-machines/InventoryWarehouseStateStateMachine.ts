export type InventoryWarehouseStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryWarehouseStateStateMachine {
  private allowedTransitions: Record<InventoryWarehouseStateState, InventoryWarehouseStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryWarehouseStateState, to: InventoryWarehouseStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryWarehouseStateState, to: InventoryWarehouseStateState): InventoryWarehouseStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryWarehouseState: " + from + " -> " + to);
    }
    return to;
  }
}
