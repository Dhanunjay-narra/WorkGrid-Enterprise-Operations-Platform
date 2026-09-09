export type AiModelFallbackLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiModelFallbackLogStateMachine {
  private validTransitions: Record<AiModelFallbackLogState, AiModelFallbackLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiModelFallbackLogState, next: AiModelFallbackLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiModelFallbackLogState, next: AiModelFallbackLogState): AiModelFallbackLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiModelFallbackLog: from " + current + " to " + next);
    }
    return next;
  }
}
