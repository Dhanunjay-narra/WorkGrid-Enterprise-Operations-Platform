export type HrAttendancePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendancePayloadStateMachine {
  private allowedTransitions: Record<HrAttendancePayloadState, HrAttendancePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendancePayloadState, to: HrAttendancePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendancePayloadState, to: HrAttendancePayloadState): HrAttendancePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendancePayload: " + from + " -> " + to);
    }
    return to;
  }
}
