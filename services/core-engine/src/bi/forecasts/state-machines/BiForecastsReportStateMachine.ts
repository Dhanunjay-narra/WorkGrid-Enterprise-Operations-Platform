export type BiForecastsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsReportStateMachine {
  private allowedTransitions: Record<BiForecastsReportState, BiForecastsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsReportState, to: BiForecastsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsReportState, to: BiForecastsReportState): BiForecastsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsReport: " + from + " -> " + to);
    }
    return to;
  }
}
