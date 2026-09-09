export type InventoryBatchesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesProfileStateMachine {
  private allowedTransitions: Record<InventoryBatchesProfileState, InventoryBatchesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesProfileState, to: InventoryBatchesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesProfileState, to: InventoryBatchesProfileState): InventoryBatchesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
