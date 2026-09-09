export type InventorySkuQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuQueueStateMachine {
  private allowedTransitions: Record<InventorySkuQueueState, InventorySkuQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuQueueState, to: InventorySkuQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuQueueState, to: InventorySkuQueueState): InventorySkuQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuQueue: " + from + " -> " + to);
    }
    return to;
  }
}
