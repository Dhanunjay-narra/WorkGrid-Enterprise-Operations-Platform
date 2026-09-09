export type IntSalesforceThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceThresholdStateMachine {
  private allowedTransitions: Record<IntSalesforceThresholdState, IntSalesforceThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceThresholdState, to: IntSalesforceThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceThresholdState, to: IntSalesforceThresholdState): IntSalesforceThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
