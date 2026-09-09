export type ObsMetricsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsConfigStateMachine {
  private allowedTransitions: Record<ObsMetricsConfigState, ObsMetricsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsConfigState, to: ObsMetricsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsConfigState, to: ObsMetricsConfigState): ObsMetricsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
