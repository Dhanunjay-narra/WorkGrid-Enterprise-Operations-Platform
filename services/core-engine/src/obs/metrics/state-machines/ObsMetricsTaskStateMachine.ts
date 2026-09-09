export type ObsMetricsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsTaskStateMachine {
  private allowedTransitions: Record<ObsMetricsTaskState, ObsMetricsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsTaskState, to: ObsMetricsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsTaskState, to: ObsMetricsTaskState): ObsMetricsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsTask: " + from + " -> " + to);
    }
    return to;
  }
}
