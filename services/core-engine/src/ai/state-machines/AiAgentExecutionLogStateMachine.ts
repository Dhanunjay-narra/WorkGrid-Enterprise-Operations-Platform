export type AiAgentExecutionLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiAgentExecutionLogStateMachine {
  private validTransitions: Record<AiAgentExecutionLogState, AiAgentExecutionLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiAgentExecutionLogState, next: AiAgentExecutionLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiAgentExecutionLogState, next: AiAgentExecutionLogState): AiAgentExecutionLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiAgentExecutionLog: from " + current + " to " + next);
    }
    return next;
  }
}
