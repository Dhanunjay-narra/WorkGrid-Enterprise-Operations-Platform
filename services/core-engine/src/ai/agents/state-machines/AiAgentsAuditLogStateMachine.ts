export type AiAgentsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsAuditLogStateMachine {
  private allowedTransitions: Record<AiAgentsAuditLogState, AiAgentsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsAuditLogState, to: AiAgentsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsAuditLogState, to: AiAgentsAuditLogState): AiAgentsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
