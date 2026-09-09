export type HrPerformanceMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceMetricStateMachine {
  private allowedTransitions: Record<HrPerformanceMetricState, HrPerformanceMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceMetricState, to: HrPerformanceMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceMetricState, to: HrPerformanceMetricState): HrPerformanceMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceMetric: " + from + " -> " + to);
    }
    return to;
  }
}
