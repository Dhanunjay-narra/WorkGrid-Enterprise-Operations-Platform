export type HrRecruitmentSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentSnapshotStateMachine {
  private allowedTransitions: Record<HrRecruitmentSnapshotState, HrRecruitmentSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentSnapshotState, to: HrRecruitmentSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentSnapshotState, to: HrRecruitmentSnapshotState): HrRecruitmentSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
