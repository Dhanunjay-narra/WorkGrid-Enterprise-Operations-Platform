export type HrDepartmentsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsQueueStateMachine {
  private allowedTransitions: Record<HrDepartmentsQueueState, HrDepartmentsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsQueueState, to: HrDepartmentsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsQueueState, to: HrDepartmentsQueueState): HrDepartmentsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
