export type IdPasskeyCredentialState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdPasskeyCredentialStateMachine {
  private validTransitions: Record<IdPasskeyCredentialState, IdPasskeyCredentialState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdPasskeyCredentialState, next: IdPasskeyCredentialState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdPasskeyCredentialState, next: IdPasskeyCredentialState): IdPasskeyCredentialState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdPasskeyCredential: from " + current + " to " + next);
    }
    return next;
  }
}
