export type CrmForecastingReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingReportStateMachine {
  private allowedTransitions: Record<CrmForecastingReportState, CrmForecastingReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingReportState, to: CrmForecastingReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingReportState, to: CrmForecastingReportState): CrmForecastingReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingReport: " + from + " -> " + to);
    }
    return to;
  }
}
