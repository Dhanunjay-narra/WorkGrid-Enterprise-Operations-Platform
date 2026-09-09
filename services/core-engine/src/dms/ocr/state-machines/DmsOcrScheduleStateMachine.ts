export type DmsOcrScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrScheduleStateMachine {
  private allowedTransitions: Record<DmsOcrScheduleState, DmsOcrScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrScheduleState, to: DmsOcrScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrScheduleState, to: DmsOcrScheduleState): DmsOcrScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
