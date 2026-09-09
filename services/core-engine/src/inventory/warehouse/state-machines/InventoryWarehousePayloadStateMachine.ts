export type InventoryWarehousePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryWarehousePayloadStateMachine {
  private allowedTransitions: Record<InventoryWarehousePayloadState, InventoryWarehousePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryWarehousePayloadState, to: InventoryWarehousePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryWarehousePayloadState, to: InventoryWarehousePayloadState): InventoryWarehousePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryWarehousePayload: " + from + " -> " + to);
    }
    return to;
  }
}
