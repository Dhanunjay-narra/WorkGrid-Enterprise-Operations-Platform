export type InventoryBatchesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesPolicyStateMachine {
  private allowedTransitions: Record<InventoryBatchesPolicyState, InventoryBatchesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesPolicyState, to: InventoryBatchesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesPolicyState, to: InventoryBatchesPolicyState): InventoryBatchesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
