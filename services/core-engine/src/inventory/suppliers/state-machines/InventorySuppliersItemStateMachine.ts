export type InventorySuppliersItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersItemStateMachine {
  private allowedTransitions: Record<InventorySuppliersItemState, InventorySuppliersItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersItemState, to: InventorySuppliersItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersItemState, to: InventorySuppliersItemState): InventorySuppliersItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersItem: " + from + " -> " + to);
    }
    return to;
  }
}
