export type InventoryBatchesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesRecordStateMachine {
  private allowedTransitions: Record<InventoryBatchesRecordState, InventoryBatchesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesRecordState, to: InventoryBatchesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesRecordState, to: InventoryBatchesRecordState): InventoryBatchesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
