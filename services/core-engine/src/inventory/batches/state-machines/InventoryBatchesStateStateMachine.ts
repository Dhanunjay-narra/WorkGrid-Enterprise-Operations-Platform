export type InventoryBatchesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesStateStateMachine {
  private allowedTransitions: Record<InventoryBatchesStateState, InventoryBatchesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesStateState, to: InventoryBatchesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesStateState, to: InventoryBatchesStateState): InventoryBatchesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesState: " + from + " -> " + to);
    }
    return to;
  }
}
