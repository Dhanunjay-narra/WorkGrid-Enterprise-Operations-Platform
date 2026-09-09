export type ObsMetricsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsStateStateMachine {
  private allowedTransitions: Record<ObsMetricsStateState, ObsMetricsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsStateState, to: ObsMetricsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsStateState, to: ObsMetricsStateState): ObsMetricsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsState: " + from + " -> " + to);
    }
    return to;
  }
}
