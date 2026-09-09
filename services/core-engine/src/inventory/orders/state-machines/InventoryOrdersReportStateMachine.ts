export type InventoryOrdersReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersReportStateMachine {
  private allowedTransitions: Record<InventoryOrdersReportState, InventoryOrdersReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersReportState, to: InventoryOrdersReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersReportState, to: InventoryOrdersReportState): InventoryOrdersReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersReport: " + from + " -> " + to);
    }
    return to;
  }
}
