export type CrmLeadsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsAuditLogStateMachine {
  private allowedTransitions: Record<CrmLeadsAuditLogState, CrmLeadsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsAuditLogState, to: CrmLeadsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsAuditLogState, to: CrmLeadsAuditLogState): CrmLeadsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
