export type InventorySuppliersStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersStateStateMachine {
  private allowedTransitions: Record<InventorySuppliersStateState, InventorySuppliersStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersStateState, to: InventorySuppliersStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersStateState, to: InventorySuppliersStateState): InventorySuppliersStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersState: " + from + " -> " + to);
    }
    return to;
  }
}
