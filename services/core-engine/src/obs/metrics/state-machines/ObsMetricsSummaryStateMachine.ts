export type ObsMetricsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsSummaryStateMachine {
  private allowedTransitions: Record<ObsMetricsSummaryState, ObsMetricsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsSummaryState, to: ObsMetricsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsSummaryState, to: ObsMetricsSummaryState): ObsMetricsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
