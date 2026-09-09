export type HrPerformanceTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceTaskStateMachine {
  private allowedTransitions: Record<HrPerformanceTaskState, HrPerformanceTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceTaskState, to: HrPerformanceTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceTaskState, to: HrPerformanceTaskState): HrPerformanceTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceTask: " + from + " -> " + to);
    }
    return to;
  }
}
