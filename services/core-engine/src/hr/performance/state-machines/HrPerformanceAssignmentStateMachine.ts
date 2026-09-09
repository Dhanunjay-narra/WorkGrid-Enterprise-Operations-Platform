export type HrPerformanceAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceAssignmentStateMachine {
  private allowedTransitions: Record<HrPerformanceAssignmentState, HrPerformanceAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceAssignmentState, to: HrPerformanceAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceAssignmentState, to: HrPerformanceAssignmentState): HrPerformanceAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
