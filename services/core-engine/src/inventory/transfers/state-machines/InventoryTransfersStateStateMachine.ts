export type InventoryTransfersStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersStateStateMachine {
  private allowedTransitions: Record<InventoryTransfersStateState, InventoryTransfersStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersStateState, to: InventoryTransfersStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersStateState, to: InventoryTransfersStateState): InventoryTransfersStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersState: " + from + " -> " + to);
    }
    return to;
  }
}
