export type CrmTerritoryAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryAuditLogStateMachine {
  private allowedTransitions: Record<CrmTerritoryAuditLogState, CrmTerritoryAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryAuditLogState, to: CrmTerritoryAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryAuditLogState, to: CrmTerritoryAuditLogState): CrmTerritoryAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
