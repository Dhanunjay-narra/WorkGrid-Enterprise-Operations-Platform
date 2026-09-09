export type AiGatewayAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayAuditLogStateMachine {
  private allowedTransitions: Record<AiGatewayAuditLogState, AiGatewayAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayAuditLogState, to: AiGatewayAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayAuditLogState, to: AiGatewayAuditLogState): AiGatewayAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
