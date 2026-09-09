export type ObsMetricsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsQueueStateMachine {
  private allowedTransitions: Record<ObsMetricsQueueState, ObsMetricsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsQueueState, to: ObsMetricsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsQueueState, to: ObsMetricsQueueState): ObsMetricsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
