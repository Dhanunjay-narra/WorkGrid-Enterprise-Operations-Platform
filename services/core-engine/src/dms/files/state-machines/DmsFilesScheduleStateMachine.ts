export type DmsFilesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesScheduleStateMachine {
  private allowedTransitions: Record<DmsFilesScheduleState, DmsFilesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesScheduleState, to: DmsFilesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesScheduleState, to: DmsFilesScheduleState): DmsFilesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
