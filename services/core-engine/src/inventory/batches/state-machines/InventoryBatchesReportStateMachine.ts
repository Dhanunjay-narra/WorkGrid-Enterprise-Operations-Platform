export type InventoryBatchesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesReportStateMachine {
  private allowedTransitions: Record<InventoryBatchesReportState, InventoryBatchesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesReportState, to: InventoryBatchesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesReportState, to: InventoryBatchesReportState): InventoryBatchesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesReport: " + from + " -> " + to);
    }
    return to;
  }
}
