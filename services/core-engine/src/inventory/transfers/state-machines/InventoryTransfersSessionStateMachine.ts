export type InventoryTransfersSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersSessionStateMachine {
  private allowedTransitions: Record<InventoryTransfersSessionState, InventoryTransfersSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersSessionState, to: InventoryTransfersSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersSessionState, to: InventoryTransfersSessionState): InventoryTransfersSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersSession: " + from + " -> " + to);
    }
    return to;
  }
}
