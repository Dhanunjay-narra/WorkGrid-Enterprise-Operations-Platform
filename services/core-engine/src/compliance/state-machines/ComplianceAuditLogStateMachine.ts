export type ComplianceAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceAuditLogStateMachine {
  private allowedTransitions: Record<ComplianceAuditLogState, ComplianceAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceAuditLogState, to: ComplianceAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceAuditLogState, to: ComplianceAuditLogState): ComplianceAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
