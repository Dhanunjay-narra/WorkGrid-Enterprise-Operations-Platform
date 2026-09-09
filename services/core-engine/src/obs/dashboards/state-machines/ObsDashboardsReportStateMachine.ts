export type ObsDashboardsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsReportStateMachine {
  private allowedTransitions: Record<ObsDashboardsReportState, ObsDashboardsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsReportState, to: ObsDashboardsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsReportState, to: ObsDashboardsReportState): ObsDashboardsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsReport: " + from + " -> " + to);
    }
    return to;
  }
}
