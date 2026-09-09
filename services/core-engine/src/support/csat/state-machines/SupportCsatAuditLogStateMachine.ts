export type SupportCsatAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatAuditLogStateMachine {
  private allowedTransitions: Record<SupportCsatAuditLogState, SupportCsatAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatAuditLogState, to: SupportCsatAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatAuditLogState, to: SupportCsatAuditLogState): SupportCsatAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
