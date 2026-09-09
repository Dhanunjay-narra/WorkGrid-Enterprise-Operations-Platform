export type InventoryReorderRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderRuleStateMachine {
  private allowedTransitions: Record<InventoryReorderRuleState, InventoryReorderRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderRuleState, to: InventoryReorderRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderRuleState, to: InventoryReorderRuleState): InventoryReorderRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderRule: " + from + " -> " + to);
    }
    return to;
  }
}
