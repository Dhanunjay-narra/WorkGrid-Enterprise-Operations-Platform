export type InventorySkuRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuRuleStateMachine {
  private allowedTransitions: Record<InventorySkuRuleState, InventorySkuRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuRuleState, to: InventorySkuRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuRuleState, to: InventorySkuRuleState): InventorySkuRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuRule: " + from + " -> " + to);
    }
    return to;
  }
}
