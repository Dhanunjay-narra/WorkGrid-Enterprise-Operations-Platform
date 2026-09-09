export type HrPerformanceThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceThresholdStateMachine {
  private allowedTransitions: Record<HrPerformanceThresholdState, HrPerformanceThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceThresholdState, to: HrPerformanceThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceThresholdState, to: HrPerformanceThresholdState): HrPerformanceThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
