export type InventoryBatchesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesMetricStateMachine {
  private allowedTransitions: Record<InventoryBatchesMetricState, InventoryBatchesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesMetricState, to: InventoryBatchesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesMetricState, to: InventoryBatchesMetricState): InventoryBatchesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
