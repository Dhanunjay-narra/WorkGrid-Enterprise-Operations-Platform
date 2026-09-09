export type InventoryReorderSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderSummaryStateMachine {
  private allowedTransitions: Record<InventoryReorderSummaryState, InventoryReorderSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderSummaryState, to: InventoryReorderSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderSummaryState, to: InventoryReorderSummaryState): InventoryReorderSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderSummary: " + from + " -> " + to);
    }
    return to;
  }
}
