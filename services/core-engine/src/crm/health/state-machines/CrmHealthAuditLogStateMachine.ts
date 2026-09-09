export type CrmHealthAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthAuditLogStateMachine {
  private allowedTransitions: Record<CrmHealthAuditLogState, CrmHealthAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthAuditLogState, to: CrmHealthAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthAuditLogState, to: CrmHealthAuditLogState): CrmHealthAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
