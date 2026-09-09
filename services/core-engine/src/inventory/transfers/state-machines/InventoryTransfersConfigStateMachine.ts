export type InventoryTransfersConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersConfigStateMachine {
  private allowedTransitions: Record<InventoryTransfersConfigState, InventoryTransfersConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersConfigState, to: InventoryTransfersConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersConfigState, to: InventoryTransfersConfigState): InventoryTransfersConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersConfig: " + from + " -> " + to);
    }
    return to;
  }
}
