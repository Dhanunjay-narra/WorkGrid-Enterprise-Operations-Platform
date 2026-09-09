export type InvStorageBinState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvStorageBinStateMachine {
  private validTransitions: Record<InvStorageBinState, InvStorageBinState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvStorageBinState, next: InvStorageBinState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvStorageBinState, next: InvStorageBinState): InvStorageBinState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvStorageBin: from " + current + " to " + next);
    }
    return next;
  }
}
