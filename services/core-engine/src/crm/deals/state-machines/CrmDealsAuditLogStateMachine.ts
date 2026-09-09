export type CrmDealsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsAuditLogStateMachine {
  private allowedTransitions: Record<CrmDealsAuditLogState, CrmDealsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsAuditLogState, to: CrmDealsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsAuditLogState, to: CrmDealsAuditLogState): CrmDealsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
