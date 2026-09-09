export type HrPerformanceNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceNodeStateMachine {
  private allowedTransitions: Record<HrPerformanceNodeState, HrPerformanceNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceNodeState, to: HrPerformanceNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceNodeState, to: HrPerformanceNodeState): HrPerformanceNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceNode: " + from + " -> " + to);
    }
    return to;
  }
}
