export type HrEmployeesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesNodeStateMachine {
  private allowedTransitions: Record<HrEmployeesNodeState, HrEmployeesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesNodeState, to: HrEmployeesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesNodeState, to: HrEmployeesNodeState): HrEmployeesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesNode: " + from + " -> " + to);
    }
    return to;
  }
}
