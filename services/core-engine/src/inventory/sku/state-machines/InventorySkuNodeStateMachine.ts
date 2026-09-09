export type InventorySkuNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuNodeStateMachine {
  private allowedTransitions: Record<InventorySkuNodeState, InventorySkuNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuNodeState, to: InventorySkuNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuNodeState, to: InventorySkuNodeState): InventorySkuNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuNode: " + from + " -> " + to);
    }
    return to;
  }
}
