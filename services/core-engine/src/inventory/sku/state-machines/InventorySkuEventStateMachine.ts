export type InventorySkuEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuEventStateMachine {
  private allowedTransitions: Record<InventorySkuEventState, InventorySkuEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuEventState, to: InventorySkuEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuEventState, to: InventorySkuEventState): InventorySkuEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuEvent: " + from + " -> " + to);
    }
    return to;
  }
}
