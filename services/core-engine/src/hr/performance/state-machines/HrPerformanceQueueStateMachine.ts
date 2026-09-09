export type HrPerformanceQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceQueueStateMachine {
  private allowedTransitions: Record<HrPerformanceQueueState, HrPerformanceQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceQueueState, to: HrPerformanceQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceQueueState, to: HrPerformanceQueueState): HrPerformanceQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceQueue: " + from + " -> " + to);
    }
    return to;
  }
}
