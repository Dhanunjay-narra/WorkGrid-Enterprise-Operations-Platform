export type HrPayrollAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollAuditLogStateMachine {
  private allowedTransitions: Record<HrPayrollAuditLogState, HrPayrollAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollAuditLogState, to: HrPayrollAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollAuditLogState, to: HrPayrollAuditLogState): HrPayrollAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
