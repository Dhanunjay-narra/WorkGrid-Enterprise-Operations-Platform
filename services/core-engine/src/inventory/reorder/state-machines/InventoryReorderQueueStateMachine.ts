export type InventoryReorderQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderQueueStateMachine {
  private allowedTransitions: Record<InventoryReorderQueueState, InventoryReorderQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderQueueState, to: InventoryReorderQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderQueueState, to: InventoryReorderQueueState): InventoryReorderQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderQueue: " + from + " -> " + to);
    }
    return to;
  }
}
