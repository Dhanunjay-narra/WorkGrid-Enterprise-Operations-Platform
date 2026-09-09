export type HrEmployeesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesAuditLogStateMachine {
  private allowedTransitions: Record<HrEmployeesAuditLogState, HrEmployeesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesAuditLogState, to: HrEmployeesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesAuditLogState, to: HrEmployeesAuditLogState): HrEmployeesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
