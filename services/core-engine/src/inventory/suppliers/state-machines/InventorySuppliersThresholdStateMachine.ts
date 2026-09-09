export type InventorySuppliersThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersThresholdStateMachine {
  private allowedTransitions: Record<InventorySuppliersThresholdState, InventorySuppliersThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersThresholdState, to: InventorySuppliersThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersThresholdState, to: InventorySuppliersThresholdState): InventorySuppliersThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
