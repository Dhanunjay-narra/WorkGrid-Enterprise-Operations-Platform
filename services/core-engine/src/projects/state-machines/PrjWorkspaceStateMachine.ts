export type PrjWorkspaceState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjWorkspaceStateMachine {
  private validTransitions: Record<PrjWorkspaceState, PrjWorkspaceState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjWorkspaceState, next: PrjWorkspaceState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjWorkspaceState, next: PrjWorkspaceState): PrjWorkspaceState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjWorkspace: from " + current + " to " + next);
    }
    return next;
  }
}
