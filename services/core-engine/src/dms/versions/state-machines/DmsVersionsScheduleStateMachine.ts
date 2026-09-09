export type DmsVersionsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsScheduleStateMachine {
  private allowedTransitions: Record<DmsVersionsScheduleState, DmsVersionsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsScheduleState, to: DmsVersionsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsScheduleState, to: DmsVersionsScheduleState): DmsVersionsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
