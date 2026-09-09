export type IntSalesforceProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceProfileStateMachine {
  private allowedTransitions: Record<IntSalesforceProfileState, IntSalesforceProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceProfileState, to: IntSalesforceProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceProfileState, to: IntSalesforceProfileState): IntSalesforceProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceProfile: " + from + " -> " + to);
    }
    return to;
  }
}
