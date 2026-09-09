export type ObsMetricsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsReportStateMachine {
  private allowedTransitions: Record<ObsMetricsReportState, ObsMetricsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsReportState, to: ObsMetricsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsReportState, to: ObsMetricsReportState): ObsMetricsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsReport: " + from + " -> " + to);
    }
    return to;
  }
}
