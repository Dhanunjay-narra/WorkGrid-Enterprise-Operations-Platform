export type InventoryTransfersItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersItemStateMachine {
  private allowedTransitions: Record<InventoryTransfersItemState, InventoryTransfersItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersItemState, to: InventoryTransfersItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersItemState, to: InventoryTransfersItemState): InventoryTransfersItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersItem: " + from + " -> " + to);
    }
    return to;
  }
}
