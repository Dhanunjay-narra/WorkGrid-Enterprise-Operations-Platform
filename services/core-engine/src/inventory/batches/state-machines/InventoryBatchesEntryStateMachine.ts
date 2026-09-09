export type InventoryBatchesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesEntryStateMachine {
  private allowedTransitions: Record<InventoryBatchesEntryState, InventoryBatchesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesEntryState, to: InventoryBatchesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesEntryState, to: InventoryBatchesEntryState): InventoryBatchesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
