export type BiReportScheduleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiReportScheduleStateMachine {
  private validTransitions: Record<BiReportScheduleState, BiReportScheduleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiReportScheduleState, next: BiReportScheduleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiReportScheduleState, next: BiReportScheduleState): BiReportScheduleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiReportSchedule: from " + current + " to " + next);
    }
    return next;
  }
}
