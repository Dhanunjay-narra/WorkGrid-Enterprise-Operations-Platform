export type HrDepartmentsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsSnapshotStateMachine {
  private allowedTransitions: Record<HrDepartmentsSnapshotState, HrDepartmentsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsSnapshotState, to: HrDepartmentsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsSnapshotState, to: HrDepartmentsSnapshotState): HrDepartmentsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
