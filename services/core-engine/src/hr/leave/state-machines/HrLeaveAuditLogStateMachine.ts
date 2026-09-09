export type HrLeaveAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveAuditLogStateMachine {
  private allowedTransitions: Record<HrLeaveAuditLogState, HrLeaveAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveAuditLogState, to: HrLeaveAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveAuditLogState, to: HrLeaveAuditLogState): HrLeaveAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
