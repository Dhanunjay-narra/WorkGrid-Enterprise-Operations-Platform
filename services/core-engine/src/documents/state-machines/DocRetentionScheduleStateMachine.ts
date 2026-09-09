export type DocRetentionScheduleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocRetentionScheduleStateMachine {
  private validTransitions: Record<DocRetentionScheduleState, DocRetentionScheduleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocRetentionScheduleState, next: DocRetentionScheduleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocRetentionScheduleState, next: DocRetentionScheduleState): DocRetentionScheduleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocRetentionSchedule: from " + current + " to " + next);
    }
    return next;
  }
}
