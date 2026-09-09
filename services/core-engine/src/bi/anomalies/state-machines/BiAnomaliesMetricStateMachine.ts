export type BiAnomaliesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesMetricStateMachine {
  private allowedTransitions: Record<BiAnomaliesMetricState, BiAnomaliesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesMetricState, to: BiAnomaliesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesMetricState, to: BiAnomaliesMetricState): BiAnomaliesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
