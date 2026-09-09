export type WfVariableStoreState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfVariableStoreStateMachine {
  private validTransitions: Record<WfVariableStoreState, WfVariableStoreState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfVariableStoreState, next: WfVariableStoreState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfVariableStoreState, next: WfVariableStoreState): WfVariableStoreState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfVariableStore: from " + current + " to " + next);
    }
    return next;
  }
}
