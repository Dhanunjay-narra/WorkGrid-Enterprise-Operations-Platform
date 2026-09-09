export type IntSalesforceSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceSessionStateMachine {
  private allowedTransitions: Record<IntSalesforceSessionState, IntSalesforceSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceSessionState, to: IntSalesforceSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceSessionState, to: IntSalesforceSessionState): IntSalesforceSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceSession: " + from + " -> " + to);
    }
    return to;
  }
}
