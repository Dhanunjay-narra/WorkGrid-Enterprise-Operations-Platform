export type HrAttendanceSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceSnapshotStateMachine {
  private allowedTransitions: Record<HrAttendanceSnapshotState, HrAttendanceSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceSnapshotState, to: HrAttendanceSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceSnapshotState, to: HrAttendanceSnapshotState): HrAttendanceSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
