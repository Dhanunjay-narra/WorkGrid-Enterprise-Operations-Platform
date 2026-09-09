export type AiToolsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsAuditLogStateMachine {
  private allowedTransitions: Record<AiToolsAuditLogState, AiToolsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsAuditLogState, to: AiToolsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsAuditLogState, to: AiToolsAuditLogState): AiToolsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
