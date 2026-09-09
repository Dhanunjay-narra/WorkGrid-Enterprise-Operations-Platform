export type IntSalesforceQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceQueueStateMachine {
  private allowedTransitions: Record<IntSalesforceQueueState, IntSalesforceQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceQueueState, to: IntSalesforceQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceQueueState, to: IntSalesforceQueueState): IntSalesforceQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceQueue: " + from + " -> " + to);
    }
    return to;
  }
}
