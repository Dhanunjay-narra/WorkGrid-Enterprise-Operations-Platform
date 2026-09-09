export type AuditRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditRuleStateMachine {
  private allowedTransitions: Record<AuditRuleState, AuditRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditRuleState, to: AuditRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditRuleState, to: AuditRuleState): AuditRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditRule: " + from + " -> " + to);
    }
    return to;
  }
}
