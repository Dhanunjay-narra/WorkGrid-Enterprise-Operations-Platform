export type InventoryStockSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockSummaryStateMachine {
  private allowedTransitions: Record<InventoryStockSummaryState, InventoryStockSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockSummaryState, to: InventoryStockSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockSummaryState, to: InventoryStockSummaryState): InventoryStockSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockSummary: " + from + " -> " + to);
    }
    return to;
  }
}
