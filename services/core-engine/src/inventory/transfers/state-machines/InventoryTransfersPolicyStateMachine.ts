export type InventoryTransfersPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersPolicyStateMachine {
  private allowedTransitions: Record<InventoryTransfersPolicyState, InventoryTransfersPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersPolicyState, to: InventoryTransfersPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersPolicyState, to: InventoryTransfersPolicyState): InventoryTransfersPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
