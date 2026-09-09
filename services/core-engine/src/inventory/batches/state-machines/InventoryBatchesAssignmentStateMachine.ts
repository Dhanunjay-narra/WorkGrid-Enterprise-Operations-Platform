export type InventoryBatchesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesAssignmentStateMachine {
  private allowedTransitions: Record<InventoryBatchesAssignmentState, InventoryBatchesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesAssignmentState, to: InventoryBatchesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesAssignmentState, to: InventoryBatchesAssignmentState): InventoryBatchesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
