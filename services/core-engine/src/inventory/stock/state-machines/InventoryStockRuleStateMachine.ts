export type InventoryStockRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockRuleStateMachine {
  private allowedTransitions: Record<InventoryStockRuleState, InventoryStockRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockRuleState, to: InventoryStockRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockRuleState, to: InventoryStockRuleState): InventoryStockRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockRule: " + from + " -> " + to);
    }
    return to;
  }
}
