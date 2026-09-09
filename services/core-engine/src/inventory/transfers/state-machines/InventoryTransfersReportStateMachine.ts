export type InventoryTransfersReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersReportStateMachine {
  private allowedTransitions: Record<InventoryTransfersReportState, InventoryTransfersReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersReportState, to: InventoryTransfersReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersReportState, to: InventoryTransfersReportState): InventoryTransfersReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersReport: " + from + " -> " + to);
    }
    return to;
  }
}
