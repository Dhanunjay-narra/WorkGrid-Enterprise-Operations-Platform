export type InventorySuppliersTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersTaskStateMachine {
  private allowedTransitions: Record<InventorySuppliersTaskState, InventorySuppliersTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersTaskState, to: InventorySuppliersTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersTaskState, to: InventorySuppliersTaskState): InventorySuppliersTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersTask: " + from + " -> " + to);
    }
    return to;
  }
}
