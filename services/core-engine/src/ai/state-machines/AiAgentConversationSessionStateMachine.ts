export type AiAgentConversationSessionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiAgentConversationSessionStateMachine {
  private validTransitions: Record<AiAgentConversationSessionState, AiAgentConversationSessionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiAgentConversationSessionState, next: AiAgentConversationSessionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiAgentConversationSessionState, next: AiAgentConversationSessionState): AiAgentConversationSessionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiAgentConversationSession: from " + current + " to " + next);
    }
    return next;
  }
}
