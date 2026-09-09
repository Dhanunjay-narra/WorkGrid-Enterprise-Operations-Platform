export type HrAttendanceAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceAuditLogStateMachine {
  private allowedTransitions: Record<HrAttendanceAuditLogState, HrAttendanceAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceAuditLogState, to: HrAttendanceAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceAuditLogState, to: HrAttendanceAuditLogState): HrAttendanceAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
