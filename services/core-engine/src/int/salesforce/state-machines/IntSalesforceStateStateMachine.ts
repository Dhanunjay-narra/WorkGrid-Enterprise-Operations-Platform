export type IntSalesforceStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceStateStateMachine {
  private allowedTransitions: Record<IntSalesforceStateState, IntSalesforceStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceStateState, to: IntSalesforceStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceStateState, to: IntSalesforceStateState): IntSalesforceStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceState: " + from + " -> " + to);
    }
    return to;
  }
}
