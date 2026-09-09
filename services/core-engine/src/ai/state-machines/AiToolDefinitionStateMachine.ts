export type AiToolDefinitionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiToolDefinitionStateMachine {
  private validTransitions: Record<AiToolDefinitionState, AiToolDefinitionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiToolDefinitionState, next: AiToolDefinitionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiToolDefinitionState, next: AiToolDefinitionState): AiToolDefinitionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiToolDefinition: from " + current + " to " + next);
    }
    return next;
  }
}
