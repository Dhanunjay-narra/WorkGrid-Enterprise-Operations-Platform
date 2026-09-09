export type HrShiftsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsRecordStateMachine {
  private allowedTransitions: Record<HrShiftsRecordState, HrShiftsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsRecordState, to: HrShiftsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsRecordState, to: HrShiftsRecordState): HrShiftsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
