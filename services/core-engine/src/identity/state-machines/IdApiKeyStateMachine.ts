export type IdApiKeyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdApiKeyStateMachine {
  private validTransitions: Record<IdApiKeyState, IdApiKeyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdApiKeyState, next: IdApiKeyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdApiKeyState, next: IdApiKeyState): IdApiKeyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdApiKey: from " + current + " to " + next);
    }
    return next;
  }
}
