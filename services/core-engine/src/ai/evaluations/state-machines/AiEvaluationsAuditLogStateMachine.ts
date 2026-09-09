export type AiEvaluationsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsAuditLogStateMachine {
  private allowedTransitions: Record<AiEvaluationsAuditLogState, AiEvaluationsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsAuditLogState, to: AiEvaluationsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsAuditLogState, to: AiEvaluationsAuditLogState): AiEvaluationsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
