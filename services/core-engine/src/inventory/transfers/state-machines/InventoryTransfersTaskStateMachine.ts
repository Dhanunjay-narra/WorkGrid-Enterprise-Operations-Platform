export type InventoryTransfersTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersTaskStateMachine {
  private allowedTransitions: Record<InventoryTransfersTaskState, InventoryTransfersTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersTaskState, to: InventoryTransfersTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersTaskState, to: InventoryTransfersTaskState): InventoryTransfersTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersTask: " + from + " -> " + to);
    }
    return to;
  }
}
