export type InventorySuppliersEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersEventStateMachine {
  private allowedTransitions: Record<InventorySuppliersEventState, InventorySuppliersEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersEventState, to: InventorySuppliersEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersEventState, to: InventorySuppliersEventState): InventorySuppliersEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersEvent: " + from + " -> " + to);
    }
    return to;
  }
}
