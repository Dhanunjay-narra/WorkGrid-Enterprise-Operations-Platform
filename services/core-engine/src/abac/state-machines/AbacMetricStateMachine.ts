export type AbacMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacMetricStateMachine {
  private allowedTransitions: Record<AbacMetricState, AbacMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacMetricState, to: AbacMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacMetricState, to: AbacMetricState): AbacMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacMetric: " + from + " -> " + to);
    }
    return to;
  }
}
