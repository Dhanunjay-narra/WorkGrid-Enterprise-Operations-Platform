export type SupportEscalationAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationAuditLogStateMachine {
  private allowedTransitions: Record<SupportEscalationAuditLogState, SupportEscalationAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationAuditLogState, to: SupportEscalationAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationAuditLogState, to: SupportEscalationAuditLogState): SupportEscalationAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
