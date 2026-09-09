export type HrDepartmentsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsAuditLogStateMachine {
  private allowedTransitions: Record<HrDepartmentsAuditLogState, HrDepartmentsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsAuditLogState, to: HrDepartmentsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsAuditLogState, to: HrDepartmentsAuditLogState): HrDepartmentsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
