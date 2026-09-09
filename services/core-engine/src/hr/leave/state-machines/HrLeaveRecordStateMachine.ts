export type HrLeaveRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveRecordStateMachine {
  private allowedTransitions: Record<HrLeaveRecordState, HrLeaveRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveRecordState, to: HrLeaveRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveRecordState, to: HrLeaveRecordState): HrLeaveRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveRecord: " + from + " -> " + to);
    }
    return to;
  }
}
