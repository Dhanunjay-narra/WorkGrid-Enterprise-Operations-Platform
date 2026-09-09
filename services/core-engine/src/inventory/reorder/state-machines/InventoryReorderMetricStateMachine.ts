export type InventoryReorderMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderMetricStateMachine {
  private allowedTransitions: Record<InventoryReorderMetricState, InventoryReorderMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderMetricState, to: InventoryReorderMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderMetricState, to: InventoryReorderMetricState): InventoryReorderMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderMetric: " + from + " -> " + to);
    }
    return to;
  }
}
