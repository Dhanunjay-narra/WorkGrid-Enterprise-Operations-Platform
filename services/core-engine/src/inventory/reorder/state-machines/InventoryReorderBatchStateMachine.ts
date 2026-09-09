export type InventoryReorderBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderBatchStateMachine {
  private allowedTransitions: Record<InventoryReorderBatchState, InventoryReorderBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderBatchState, to: InventoryReorderBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderBatchState, to: InventoryReorderBatchState): InventoryReorderBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderBatch: " + from + " -> " + to);
    }
    return to;
  }
}
