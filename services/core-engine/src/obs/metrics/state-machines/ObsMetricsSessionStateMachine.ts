export type ObsMetricsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsSessionStateMachine {
  private allowedTransitions: Record<ObsMetricsSessionState, ObsMetricsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsSessionState, to: ObsMetricsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsSessionState, to: ObsMetricsSessionState): ObsMetricsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsSession: " + from + " -> " + to);
    }
    return to;
  }
}
