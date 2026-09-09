export type InventoryOrdersQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersQueueStateMachine {
  private allowedTransitions: Record<InventoryOrdersQueueState, InventoryOrdersQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersQueueState, to: InventoryOrdersQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersQueueState, to: InventoryOrdersQueueState): InventoryOrdersQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersQueue: " + from + " -> " + to);
    }
    return to;
  }
}
