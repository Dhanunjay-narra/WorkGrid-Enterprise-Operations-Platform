export type InventorySuppliersSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersSummaryStateMachine {
  private allowedTransitions: Record<InventorySuppliersSummaryState, InventorySuppliersSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersSummaryState, to: InventorySuppliersSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersSummaryState, to: InventorySuppliersSummaryState): InventorySuppliersSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersSummary: " + from + " -> " + to);
    }
    return to;
  }
}
