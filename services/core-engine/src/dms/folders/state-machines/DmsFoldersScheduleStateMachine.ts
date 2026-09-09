export type DmsFoldersScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersScheduleStateMachine {
  private allowedTransitions: Record<DmsFoldersScheduleState, DmsFoldersScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersScheduleState, to: DmsFoldersScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersScheduleState, to: DmsFoldersScheduleState): DmsFoldersScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
