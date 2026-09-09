export type InventoryWarehouseRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryWarehouseRuleStateMachine {
  private allowedTransitions: Record<InventoryWarehouseRuleState, InventoryWarehouseRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryWarehouseRuleState, to: InventoryWarehouseRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryWarehouseRuleState, to: InventoryWarehouseRuleState): InventoryWarehouseRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryWarehouseRule: " + from + " -> " + to);
    }
    return to;
  }
}
