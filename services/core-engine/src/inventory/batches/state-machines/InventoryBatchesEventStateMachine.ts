export type InventoryBatchesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesEventStateMachine {
  private allowedTransitions: Record<InventoryBatchesEventState, InventoryBatchesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesEventState, to: InventoryBatchesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesEventState, to: InventoryBatchesEventState): InventoryBatchesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
