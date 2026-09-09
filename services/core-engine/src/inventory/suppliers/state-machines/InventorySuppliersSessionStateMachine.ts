export type InventorySuppliersSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersSessionStateMachine {
  private allowedTransitions: Record<InventorySuppliersSessionState, InventorySuppliersSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersSessionState, to: InventorySuppliersSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersSessionState, to: InventorySuppliersSessionState): InventorySuppliersSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersSession: " + from + " -> " + to);
    }
    return to;
  }
}
