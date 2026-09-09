export type InventoryOrdersSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersSummaryStateMachine {
  private allowedTransitions: Record<InventoryOrdersSummaryState, InventoryOrdersSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersSummaryState, to: InventoryOrdersSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersSummaryState, to: InventoryOrdersSummaryState): InventoryOrdersSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersSummary: " + from + " -> " + to);
    }
    return to;
  }
}
