export type SecSecretMetadataState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecSecretMetadataStateMachine {
  private validTransitions: Record<SecSecretMetadataState, SecSecretMetadataState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecSecretMetadataState, next: SecSecretMetadataState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecSecretMetadataState, next: SecSecretMetadataState): SecSecretMetadataState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecSecretMetadata: from " + current + " to " + next);
    }
    return next;
  }
}
