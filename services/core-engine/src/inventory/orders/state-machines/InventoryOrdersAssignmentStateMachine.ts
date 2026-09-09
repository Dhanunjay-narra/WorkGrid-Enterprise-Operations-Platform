export type InventoryOrdersAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersAssignmentStateMachine {
  private allowedTransitions: Record<InventoryOrdersAssignmentState, InventoryOrdersAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersAssignmentState, to: InventoryOrdersAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersAssignmentState, to: InventoryOrdersAssignmentState): InventoryOrdersAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
