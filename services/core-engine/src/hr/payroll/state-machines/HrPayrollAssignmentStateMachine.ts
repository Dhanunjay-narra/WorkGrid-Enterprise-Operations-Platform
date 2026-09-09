export type HrPayrollAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollAssignmentStateMachine {
  private allowedTransitions: Record<HrPayrollAssignmentState, HrPayrollAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollAssignmentState, to: HrPayrollAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollAssignmentState, to: HrPayrollAssignmentState): HrPayrollAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
