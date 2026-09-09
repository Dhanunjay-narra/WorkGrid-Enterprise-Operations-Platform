export type ObsMetricsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsEventStateMachine {
  private allowedTransitions: Record<ObsMetricsEventState, ObsMetricsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsEventState, to: ObsMetricsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsEventState, to: ObsMetricsEventState): ObsMetricsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
