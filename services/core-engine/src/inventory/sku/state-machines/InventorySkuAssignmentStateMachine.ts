export type InventorySkuAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuAssignmentStateMachine {
  private allowedTransitions: Record<InventorySkuAssignmentState, InventorySkuAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuAssignmentState, to: InventorySkuAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuAssignmentState, to: InventorySkuAssignmentState): InventorySkuAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
