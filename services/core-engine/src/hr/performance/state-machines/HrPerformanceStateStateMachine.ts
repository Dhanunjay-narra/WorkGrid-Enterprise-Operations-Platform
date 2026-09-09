export type HrPerformanceStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceStateStateMachine {
  private allowedTransitions: Record<HrPerformanceStateState, HrPerformanceStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceStateState, to: HrPerformanceStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceStateState, to: HrPerformanceStateState): HrPerformanceStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceState: " + from + " -> " + to);
    }
    return to;
  }
}
