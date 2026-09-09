export type HrShiftsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsAssignmentStateMachine {
  private allowedTransitions: Record<HrShiftsAssignmentState, HrShiftsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsAssignmentState, to: HrShiftsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsAssignmentState, to: HrShiftsAssignmentState): HrShiftsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
