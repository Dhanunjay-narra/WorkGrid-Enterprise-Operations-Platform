export type HrAttendanceItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceItemStateMachine {
  private allowedTransitions: Record<HrAttendanceItemState, HrAttendanceItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceItemState, to: HrAttendanceItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceItemState, to: HrAttendanceItemState): HrAttendanceItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceItem: " + from + " -> " + to);
    }
    return to;
  }
}
