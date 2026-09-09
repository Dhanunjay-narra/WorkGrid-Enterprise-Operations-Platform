export type InventoryWarehouseSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryWarehouseSessionStateMachine {
  private allowedTransitions: Record<InventoryWarehouseSessionState, InventoryWarehouseSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryWarehouseSessionState, to: InventoryWarehouseSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryWarehouseSessionState, to: InventoryWarehouseSessionState): InventoryWarehouseSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryWarehouseSession: " + from + " -> " + to);
    }
    return to;
  }
}
