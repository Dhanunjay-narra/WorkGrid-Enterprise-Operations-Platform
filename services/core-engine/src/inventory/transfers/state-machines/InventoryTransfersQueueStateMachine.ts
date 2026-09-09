export type InventoryTransfersQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersQueueStateMachine {
  private allowedTransitions: Record<InventoryTransfersQueueState, InventoryTransfersQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersQueueState, to: InventoryTransfersQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersQueueState, to: InventoryTransfersQueueState): InventoryTransfersQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersQueue: " + from + " -> " + to);
    }
    return to;
  }
}
