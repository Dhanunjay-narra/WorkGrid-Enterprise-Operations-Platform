export type InventoryStockAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockAssignmentStateMachine {
  private allowedTransitions: Record<InventoryStockAssignmentState, InventoryStockAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockAssignmentState, to: InventoryStockAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockAssignmentState, to: InventoryStockAssignmentState): InventoryStockAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
