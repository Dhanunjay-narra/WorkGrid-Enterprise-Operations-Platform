export type InventoryOrdersEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersEventStateMachine {
  private allowedTransitions: Record<InventoryOrdersEventState, InventoryOrdersEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersEventState, to: InventoryOrdersEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersEventState, to: InventoryOrdersEventState): InventoryOrdersEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersEvent: " + from + " -> " + to);
    }
    return to;
  }
}
