export type InventoryTransfersProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersProfileStateMachine {
  private allowedTransitions: Record<InventoryTransfersProfileState, InventoryTransfersProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersProfileState, to: InventoryTransfersProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersProfileState, to: InventoryTransfersProfileState): InventoryTransfersProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersProfile: " + from + " -> " + to);
    }
    return to;
  }
}
