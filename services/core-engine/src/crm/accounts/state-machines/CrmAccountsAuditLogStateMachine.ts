export type CrmAccountsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsAuditLogStateMachine {
  private allowedTransitions: Record<CrmAccountsAuditLogState, CrmAccountsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsAuditLogState, to: CrmAccountsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsAuditLogState, to: CrmAccountsAuditLogState): CrmAccountsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
