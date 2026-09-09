export type ObsMetricsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsBatchStateMachine {
  private allowedTransitions: Record<ObsMetricsBatchState, ObsMetricsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsBatchState, to: ObsMetricsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsBatchState, to: ObsMetricsBatchState): ObsMetricsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
