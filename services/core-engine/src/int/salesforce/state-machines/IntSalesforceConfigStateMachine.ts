export type IntSalesforceConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceConfigStateMachine {
  private allowedTransitions: Record<IntSalesforceConfigState, IntSalesforceConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceConfigState, to: IntSalesforceConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceConfigState, to: IntSalesforceConfigState): IntSalesforceConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceConfig: " + from + " -> " + to);
    }
    return to;
  }
}
