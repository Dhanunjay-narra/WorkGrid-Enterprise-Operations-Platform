export type CommWebhooksAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksAuditLogStateMachine {
  private allowedTransitions: Record<CommWebhooksAuditLogState, CommWebhooksAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksAuditLogState, to: CommWebhooksAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksAuditLogState, to: CommWebhooksAuditLogState): CommWebhooksAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
