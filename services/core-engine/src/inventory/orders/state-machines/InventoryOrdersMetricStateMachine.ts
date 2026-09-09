export type InventoryOrdersMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersMetricStateMachine {
  private allowedTransitions: Record<InventoryOrdersMetricState, InventoryOrdersMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersMetricState, to: InventoryOrdersMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersMetricState, to: InventoryOrdersMetricState): InventoryOrdersMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersMetric: " + from + " -> " + to);
    }
    return to;
  }
}
