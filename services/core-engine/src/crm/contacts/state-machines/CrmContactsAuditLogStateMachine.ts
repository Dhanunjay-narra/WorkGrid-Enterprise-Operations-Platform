export type CrmContactsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsAuditLogStateMachine {
  private allowedTransitions: Record<CrmContactsAuditLogState, CrmContactsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsAuditLogState, to: CrmContactsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsAuditLogState, to: CrmContactsAuditLogState): CrmContactsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
