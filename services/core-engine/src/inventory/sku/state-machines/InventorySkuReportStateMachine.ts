export type InventorySkuReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuReportStateMachine {
  private allowedTransitions: Record<InventorySkuReportState, InventorySkuReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuReportState, to: InventorySkuReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuReportState, to: InventorySkuReportState): InventorySkuReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuReport: " + from + " -> " + to);
    }
    return to;
  }
}
