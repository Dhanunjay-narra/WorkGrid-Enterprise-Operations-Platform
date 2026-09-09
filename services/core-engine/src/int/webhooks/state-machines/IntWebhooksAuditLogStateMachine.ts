export type IntWebhooksAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksAuditLogStateMachine {
  private allowedTransitions: Record<IntWebhooksAuditLogState, IntWebhooksAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksAuditLogState, to: IntWebhooksAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksAuditLogState, to: IntWebhooksAuditLogState): IntWebhooksAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
