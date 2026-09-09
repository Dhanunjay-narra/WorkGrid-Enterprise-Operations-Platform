export type InventoryOrdersBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersBatchStateMachine {
  private allowedTransitions: Record<InventoryOrdersBatchState, InventoryOrdersBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersBatchState, to: InventoryOrdersBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersBatchState, to: InventoryOrdersBatchState): InventoryOrdersBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersBatch: " + from + " -> " + to);
    }
    return to;
  }
}
