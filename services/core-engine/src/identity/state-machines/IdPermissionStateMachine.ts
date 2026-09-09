export type IdPermissionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdPermissionStateMachine {
  private validTransitions: Record<IdPermissionState, IdPermissionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdPermissionState, next: IdPermissionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdPermissionState, next: IdPermissionState): IdPermissionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdPermission: from " + current + " to " + next);
    }
    return next;
  }
}
