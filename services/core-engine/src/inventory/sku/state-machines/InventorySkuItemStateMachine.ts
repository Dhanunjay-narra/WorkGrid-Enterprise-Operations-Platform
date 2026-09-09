export type InventorySkuItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuItemStateMachine {
  private allowedTransitions: Record<InventorySkuItemState, InventorySkuItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuItemState, to: InventorySkuItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuItemState, to: InventorySkuItemState): InventorySkuItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuItem: " + from + " -> " + to);
    }
    return to;
  }
}
