export type InventoryStockMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockMetricStateMachine {
  private allowedTransitions: Record<InventoryStockMetricState, InventoryStockMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockMetricState, to: InventoryStockMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockMetricState, to: InventoryStockMetricState): InventoryStockMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockMetric: " + from + " -> " + to);
    }
    return to;
  }
}
