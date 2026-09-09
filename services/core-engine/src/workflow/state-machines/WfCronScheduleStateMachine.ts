export type WfCronScheduleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfCronScheduleStateMachine {
  private validTransitions: Record<WfCronScheduleState, WfCronScheduleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfCronScheduleState, next: WfCronScheduleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfCronScheduleState, next: WfCronScheduleState): WfCronScheduleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfCronSchedule: from " + current + " to " + next);
    }
    return next;
  }
}
