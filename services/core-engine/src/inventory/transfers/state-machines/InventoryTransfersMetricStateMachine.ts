export type InventoryTransfersMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersMetricStateMachine {
  private allowedTransitions: Record<InventoryTransfersMetricState, InventoryTransfersMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersMetricState, to: InventoryTransfersMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersMetricState, to: InventoryTransfersMetricState): InventoryTransfersMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersMetric: " + from + " -> " + to);
    }
    return to;
  }
}
