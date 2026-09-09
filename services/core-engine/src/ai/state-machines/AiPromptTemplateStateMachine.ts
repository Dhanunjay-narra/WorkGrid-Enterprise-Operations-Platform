export type AiPromptTemplateState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiPromptTemplateStateMachine {
  private validTransitions: Record<AiPromptTemplateState, AiPromptTemplateState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiPromptTemplateState, next: AiPromptTemplateState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiPromptTemplateState, next: AiPromptTemplateState): AiPromptTemplateState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiPromptTemplate: from " + current + " to " + next);
    }
    return next;
  }
}
