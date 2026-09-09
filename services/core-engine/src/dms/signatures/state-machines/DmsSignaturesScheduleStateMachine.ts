export type DmsSignaturesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesScheduleStateMachine {
  private allowedTransitions: Record<DmsSignaturesScheduleState, DmsSignaturesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesScheduleState, to: DmsSignaturesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesScheduleState, to: DmsSignaturesScheduleState): DmsSignaturesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
