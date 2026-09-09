export type SupportTicketsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsAuditLogStateMachine {
  private allowedTransitions: Record<SupportTicketsAuditLogState, SupportTicketsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsAuditLogState, to: SupportTicketsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsAuditLogState, to: SupportTicketsAuditLogState): SupportTicketsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
