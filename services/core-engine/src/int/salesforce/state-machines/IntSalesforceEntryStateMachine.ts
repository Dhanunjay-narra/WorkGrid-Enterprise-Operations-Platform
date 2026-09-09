export type IntSalesforceEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceEntryStateMachine {
  private allowedTransitions: Record<IntSalesforceEntryState, IntSalesforceEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceEntryState, to: IntSalesforceEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceEntryState, to: IntSalesforceEntryState): IntSalesforceEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceEntry: " + from + " -> " + to);
    }
    return to;
  }
}
