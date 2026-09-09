export type BiCohortsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsMetricStateMachine {
  private allowedTransitions: Record<BiCohortsMetricState, BiCohortsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsMetricState, to: BiCohortsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsMetricState, to: BiCohortsMetricState): BiCohortsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
