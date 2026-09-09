export type HrEmployeesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesQueueStateMachine {
  private allowedTransitions: Record<HrEmployeesQueueState, HrEmployeesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesQueueState, to: HrEmployeesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesQueueState, to: HrEmployeesQueueState): HrEmployeesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
