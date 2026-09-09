export type SupportQueuesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesAuditLogStateMachine {
  private allowedTransitions: Record<SupportQueuesAuditLogState, SupportQueuesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesAuditLogState, to: SupportQueuesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesAuditLogState, to: SupportQueuesAuditLogState): SupportQueuesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
