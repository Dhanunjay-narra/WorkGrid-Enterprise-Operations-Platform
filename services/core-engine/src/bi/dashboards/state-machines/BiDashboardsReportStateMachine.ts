export type BiDashboardsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsReportStateMachine {
  private allowedTransitions: Record<BiDashboardsReportState, BiDashboardsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsReportState, to: BiDashboardsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsReportState, to: BiDashboardsReportState): BiDashboardsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsReport: " + from + " -> " + to);
    }
    return to;
  }
}
