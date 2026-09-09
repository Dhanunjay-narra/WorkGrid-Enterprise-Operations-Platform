export type HrPerformancePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformancePolicyStateMachine {
  private allowedTransitions: Record<HrPerformancePolicyState, HrPerformancePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformancePolicyState, to: HrPerformancePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformancePolicyState, to: HrPerformancePolicyState): HrPerformancePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformancePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
