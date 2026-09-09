export type HrPerformanceSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceSessionStateMachine {
  private allowedTransitions: Record<HrPerformanceSessionState, HrPerformanceSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceSessionState, to: HrPerformanceSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceSessionState, to: HrPerformanceSessionState): HrPerformanceSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceSession: " + from + " -> " + to);
    }
    return to;
  }
}
