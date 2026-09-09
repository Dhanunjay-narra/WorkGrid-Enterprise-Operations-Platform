export type HrPerformanceEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceEventStateMachine {
  private allowedTransitions: Record<HrPerformanceEventState, HrPerformanceEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceEventState, to: HrPerformanceEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceEventState, to: HrPerformanceEventState): HrPerformanceEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceEvent: " + from + " -> " + to);
    }
    return to;
  }
}
