export type InventoryOrdersStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersStateStateMachine {
  private allowedTransitions: Record<InventoryOrdersStateState, InventoryOrdersStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersStateState, to: InventoryOrdersStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersStateState, to: InventoryOrdersStateState): InventoryOrdersStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersState: " + from + " -> " + to);
    }
    return to;
  }
}
