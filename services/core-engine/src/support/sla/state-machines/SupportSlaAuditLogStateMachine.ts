export type SupportSlaAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaAuditLogStateMachine {
  private allowedTransitions: Record<SupportSlaAuditLogState, SupportSlaAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaAuditLogState, to: SupportSlaAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaAuditLogState, to: SupportSlaAuditLogState): SupportSlaAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
