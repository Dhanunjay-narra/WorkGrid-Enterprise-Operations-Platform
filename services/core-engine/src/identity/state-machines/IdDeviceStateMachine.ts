export type IdDeviceState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdDeviceStateMachine {
  private validTransitions: Record<IdDeviceState, IdDeviceState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdDeviceState, next: IdDeviceState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdDeviceState, next: IdDeviceState): IdDeviceState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdDevice: from " + current + " to " + next);
    }
    return next;
  }
}
