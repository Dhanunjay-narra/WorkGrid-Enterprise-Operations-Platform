export type IntSalesforceTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceTaskStateMachine {
  private allowedTransitions: Record<IntSalesforceTaskState, IntSalesforceTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceTaskState, to: IntSalesforceTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceTaskState, to: IntSalesforceTaskState): IntSalesforceTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceTask: " + from + " -> " + to);
    }
    return to;
  }
}
