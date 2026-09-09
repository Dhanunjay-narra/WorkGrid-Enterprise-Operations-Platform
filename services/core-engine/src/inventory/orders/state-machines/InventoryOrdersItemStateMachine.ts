export type InventoryOrdersItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersItemStateMachine {
  private allowedTransitions: Record<InventoryOrdersItemState, InventoryOrdersItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersItemState, to: InventoryOrdersItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersItemState, to: InventoryOrdersItemState): InventoryOrdersItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersItem: " + from + " -> " + to);
    }
    return to;
  }
}
