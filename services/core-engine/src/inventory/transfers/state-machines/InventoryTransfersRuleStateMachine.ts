export type InventoryTransfersRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersRuleStateMachine {
  private allowedTransitions: Record<InventoryTransfersRuleState, InventoryTransfersRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersRuleState, to: InventoryTransfersRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersRuleState, to: InventoryTransfersRuleState): InventoryTransfersRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersRule: " + from + " -> " + to);
    }
    return to;
  }
}
