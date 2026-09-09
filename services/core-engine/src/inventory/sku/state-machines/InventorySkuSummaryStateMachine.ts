export type InventorySkuSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuSummaryStateMachine {
  private allowedTransitions: Record<InventorySkuSummaryState, InventorySkuSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuSummaryState, to: InventorySkuSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuSummaryState, to: InventorySkuSummaryState): InventorySkuSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuSummary: " + from + " -> " + to);
    }
    return to;
  }
}
