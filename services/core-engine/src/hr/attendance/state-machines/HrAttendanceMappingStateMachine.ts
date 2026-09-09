export type HrAttendanceMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceMappingStateMachine {
  private allowedTransitions: Record<HrAttendanceMappingState, HrAttendanceMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceMappingState, to: HrAttendanceMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceMappingState, to: HrAttendanceMappingState): HrAttendanceMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceMapping: " + from + " -> " + to);
    }
    return to;
  }
}
