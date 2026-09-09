export type InventorySuppliersConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersConfigStateMachine {
  private allowedTransitions: Record<InventorySuppliersConfigState, InventorySuppliersConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersConfigState, to: InventorySuppliersConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersConfigState, to: InventorySuppliersConfigState): InventorySuppliersConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersConfig: " + from + " -> " + to);
    }
    return to;
  }
}
