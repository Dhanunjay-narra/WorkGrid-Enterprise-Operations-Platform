export type InventorySuppliersEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersEntryStateMachine {
  private allowedTransitions: Record<InventorySuppliersEntryState, InventorySuppliersEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersEntryState, to: InventorySuppliersEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersEntryState, to: InventorySuppliersEntryState): InventorySuppliersEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersEntry: " + from + " -> " + to);
    }
    return to;
  }
}
