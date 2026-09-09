export type AiPromptsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsAuditLogStateMachine {
  private allowedTransitions: Record<AiPromptsAuditLogState, AiPromptsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsAuditLogState, to: AiPromptsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsAuditLogState, to: AiPromptsAuditLogState): AiPromptsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
