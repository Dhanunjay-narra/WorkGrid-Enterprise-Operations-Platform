export type BiWidgetsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsMetricStateMachine {
  private allowedTransitions: Record<BiWidgetsMetricState, BiWidgetsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsMetricState, to: BiWidgetsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsMetricState, to: BiWidgetsMetricState): BiWidgetsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
