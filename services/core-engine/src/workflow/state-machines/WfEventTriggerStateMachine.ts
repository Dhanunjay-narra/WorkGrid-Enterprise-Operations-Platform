export type WfEventTriggerState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfEventTriggerStateMachine {
  private validTransitions: Record<WfEventTriggerState, WfEventTriggerState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfEventTriggerState, next: WfEventTriggerState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfEventTriggerState, next: WfEventTriggerState): WfEventTriggerState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfEventTrigger: from " + current + " to " + next);
    }
    return next;
  }
}
