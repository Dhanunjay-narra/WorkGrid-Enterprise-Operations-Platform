export type InventorySuppliersMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersMetricStateMachine {
  private allowedTransitions: Record<InventorySuppliersMetricState, InventorySuppliersMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersMetricState, to: InventorySuppliersMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersMetricState, to: InventorySuppliersMetricState): InventorySuppliersMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersMetric: " + from + " -> " + to);
    }
    return to;
  }
}
