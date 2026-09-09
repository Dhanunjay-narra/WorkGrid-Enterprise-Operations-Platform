export type InventoryTransfersNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersNodeStateMachine {
  private allowedTransitions: Record<InventoryTransfersNodeState, InventoryTransfersNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersNodeState, to: InventoryTransfersNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersNodeState, to: InventoryTransfersNodeState): InventoryTransfersNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersNode: " + from + " -> " + to);
    }
    return to;
  }
}
