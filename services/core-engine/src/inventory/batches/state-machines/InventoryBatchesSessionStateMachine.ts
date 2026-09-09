export type InventoryBatchesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesSessionStateMachine {
  private allowedTransitions: Record<InventoryBatchesSessionState, InventoryBatchesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesSessionState, to: InventoryBatchesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesSessionState, to: InventoryBatchesSessionState): InventoryBatchesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesSession: " + from + " -> " + to);
    }
    return to;
  }
}
