export type SupportAgentsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsAuditLogStateMachine {
  private allowedTransitions: Record<SupportAgentsAuditLogState, SupportAgentsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsAuditLogState, to: SupportAgentsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsAuditLogState, to: SupportAgentsAuditLogState): SupportAgentsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
