export type HrDepartmentsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsNodeStateMachine {
  private allowedTransitions: Record<HrDepartmentsNodeState, HrDepartmentsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsNodeState, to: HrDepartmentsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsNodeState, to: HrDepartmentsNodeState): HrDepartmentsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsNode: " + from + " -> " + to);
    }
    return to;
  }
}
