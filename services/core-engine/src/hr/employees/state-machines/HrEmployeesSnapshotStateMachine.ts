export type HrEmployeesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesSnapshotStateMachine {
  private allowedTransitions: Record<HrEmployeesSnapshotState, HrEmployeesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesSnapshotState, to: HrEmployeesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesSnapshotState, to: HrEmployeesSnapshotState): HrEmployeesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
