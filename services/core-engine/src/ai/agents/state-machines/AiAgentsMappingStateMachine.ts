export type AiAgentsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsMappingStateMachine {
  private allowedTransitions: Record<AiAgentsMappingState, AiAgentsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsMappingState, to: AiAgentsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsMappingState, to: AiAgentsMappingState): AiAgentsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
