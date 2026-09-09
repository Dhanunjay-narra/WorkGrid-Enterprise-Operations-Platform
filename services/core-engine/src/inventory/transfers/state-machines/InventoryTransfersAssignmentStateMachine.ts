export type InventoryTransfersAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersAssignmentStateMachine {
  private allowedTransitions: Record<InventoryTransfersAssignmentState, InventoryTransfersAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersAssignmentState, to: InventoryTransfersAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersAssignmentState, to: InventoryTransfersAssignmentState): InventoryTransfersAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
