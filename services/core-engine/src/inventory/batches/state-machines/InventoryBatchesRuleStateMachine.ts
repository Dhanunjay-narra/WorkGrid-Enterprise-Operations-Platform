export type InventoryBatchesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesRuleStateMachine {
  private allowedTransitions: Record<InventoryBatchesRuleState, InventoryBatchesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesRuleState, to: InventoryBatchesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesRuleState, to: InventoryBatchesRuleState): InventoryBatchesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesRule: " + from + " -> " + to);
    }
    return to;
  }
}
