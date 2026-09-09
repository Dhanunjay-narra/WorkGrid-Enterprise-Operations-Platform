export type IntSalesforceAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceAuditLogStateMachine {
  private allowedTransitions: Record<IntSalesforceAuditLogState, IntSalesforceAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceAuditLogState, to: IntSalesforceAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceAuditLogState, to: IntSalesforceAuditLogState): IntSalesforceAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
