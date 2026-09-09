export type InventoryBatchesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesTaskStateMachine {
  private allowedTransitions: Record<InventoryBatchesTaskState, InventoryBatchesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesTaskState, to: InventoryBatchesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesTaskState, to: InventoryBatchesTaskState): InventoryBatchesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesTask: " + from + " -> " + to);
    }
    return to;
  }
}
