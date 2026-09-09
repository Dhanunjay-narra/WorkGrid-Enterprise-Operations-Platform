export type InventoryBatchesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesConfigStateMachine {
  private allowedTransitions: Record<InventoryBatchesConfigState, InventoryBatchesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesConfigState, to: InventoryBatchesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesConfigState, to: InventoryBatchesConfigState): InventoryBatchesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
