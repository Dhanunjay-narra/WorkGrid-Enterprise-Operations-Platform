export type ObsMetricsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsNodeStateMachine {
  private allowedTransitions: Record<ObsMetricsNodeState, ObsMetricsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsNodeState, to: ObsMetricsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsNodeState, to: ObsMetricsNodeState): ObsMetricsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsNode: " + from + " -> " + to);
    }
    return to;
  }
}
