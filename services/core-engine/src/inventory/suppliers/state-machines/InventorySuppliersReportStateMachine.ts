export type InventorySuppliersReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersReportStateMachine {
  private allowedTransitions: Record<InventorySuppliersReportState, InventorySuppliersReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersReportState, to: InventorySuppliersReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersReportState, to: InventorySuppliersReportState): InventorySuppliersReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersReport: " + from + " -> " + to);
    }
    return to;
  }
}
