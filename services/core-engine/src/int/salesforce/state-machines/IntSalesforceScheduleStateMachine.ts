export type IntSalesforceScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceScheduleStateMachine {
  private allowedTransitions: Record<IntSalesforceScheduleState, IntSalesforceScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceScheduleState, to: IntSalesforceScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceScheduleState, to: IntSalesforceScheduleState): IntSalesforceScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
