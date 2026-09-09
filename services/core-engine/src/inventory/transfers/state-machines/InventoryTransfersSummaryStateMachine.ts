export type InventoryTransfersSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersSummaryStateMachine {
  private allowedTransitions: Record<InventoryTransfersSummaryState, InventoryTransfersSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersSummaryState, to: InventoryTransfersSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersSummaryState, to: InventoryTransfersSummaryState): InventoryTransfersSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersSummary: " + from + " -> " + to);
    }
    return to;
  }
}
